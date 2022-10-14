import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { IPokemon, IPokemonDetails, PokemonsContextData } from "./types";

const PokemonsContext = createContext({} as PokemonsContextData);

export type ReactProps = {
  children?: React.ReactElement;
};

export const PokemonsProvider: React.FC<ReactProps> = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] =
    useState<IPokemonDetails | null>(null);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [nextPage, setNextPage] = useState<string>("");
  const [previousPage, setPreviousPage] = useState<string>("");
  const [limit, setLimit] = useState(50);

  const getPokemons = useCallback(async () => {
    const response = await api.get(`pokemon?limit=${limit}`);

    setPokemons(response?.data?.results);
    setNextPage(response?.data?.next);
    setPreviousPage(response?.data?.previous ?? null);
  }, [limit]);

  const fetchNextPage = useCallback(async () => {
    if (!nextPage) return;

    const response = await api.get(nextPage);

    setPokemons(response?.data?.results);
    setNextPage(response?.data?.next ?? null);
    setPreviousPage(response?.data?.previous ?? null);
  }, [nextPage]);

  const fetchPreviousPage = useCallback(async () => {
    if (!previousPage) return;

    const response = await api.get(previousPage);

    setPokemons(response?.data?.results);
    setNextPage(response?.data?.next ?? null);
    setPreviousPage(response?.data?.previous ?? null);
  }, [previousPage]);

  const getPokemonDetails = useCallback(async (url: string) => {
    const response = await api.get(url);

    setSelectedPokemon(response?.data);
  }, []);

  useEffect(() => {
    getPokemons();
  }, [limit]);

  return (
    <PokemonsContext.Provider
      value={{
        selectedPokemon,
        setSelectedPokemon,
        pokemons,
        setPokemons,
        nextPage,
        previousPage,
        fetchNextPage,
        fetchPreviousPage,
        getPokemonDetails,
        limit,
        setLimit,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export const usePokemons = () => useContext(PokemonsContext);
