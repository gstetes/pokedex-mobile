import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { IBerry, IBerryDetails, BerriesContextData } from "./types";

const BerriesContext = createContext({} as BerriesContextData);

export type ReactProps = {
  children?: React.ReactElement;
};

export const BerriesProvider: React.FC<ReactProps> = ({ children }) => {
  const [selectedBerry, setSelectedBerry] = useState<IBerryDetails | null>(
    null
  );
  const [berries, setBerries] = useState<IBerry[]>([]);
  const [nextPage, setNextPage] = useState<string>("");
  const [previousPage, setPreviousPage] = useState<string>("");

  const getBerries = useCallback(async () => {
    const response = await api.get(`berry?limit=100`);

    setBerries(response?.data?.results);
    setNextPage(response?.data?.next);
    setPreviousPage(response?.data?.previous ?? null);
  }, []);

  const fetchNextPage = useCallback(async () => {
    if (!nextPage) return;

    const response = await api.get(nextPage);

    setBerries(response?.data?.results);
    setNextPage(response?.data?.next ?? null);
    setPreviousPage(response?.data?.previous ?? null);
  }, [nextPage]);

  const fetchPreviousPage = useCallback(async () => {
    if (!previousPage) return;

    const response = await api.get(previousPage);

    setBerries(response?.data?.results);
    setNextPage(response?.data?.next ?? null);
    setPreviousPage(response?.data?.previous ?? null);
  }, [previousPage]);

  const getBerryDetails = useCallback(async (url: string) => {
    const response = await api.get(url);

    setSelectedBerry(response?.data);
  }, []);

  useEffect(() => {
    getBerries();
  }, []);

  return (
    <BerriesContext.Provider
      value={{
        selectedBerry,
        setSelectedBerry,
        berries,
        setBerries,
        nextPage,
        previousPage,
        fetchNextPage,
        fetchPreviousPage,
        getBerryDetails,
      }}
    >
      {children}
    </BerriesContext.Provider>
  );
};

export const useBerries = () => useContext(BerriesContext);
