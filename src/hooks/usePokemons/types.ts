import { Dispatch, SetStateAction } from "react";

export interface IPokemon {
  name: string;
  url: string;
};

export interface IPokemonDetails {
  id: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    }
  }[];
  forms: {
    name: string;
    url: string;
  }[];
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    }
  }[];
  weight: number;
  height: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

export interface PokemonsContextData {
  pokemons: IPokemon[];
  setPokemons: Dispatch<SetStateAction<IPokemon[]>>;
  selectedPokemon: IPokemonDetails | null;
  setSelectedPokemon: Dispatch<SetStateAction<IPokemonDetails | null>>;
  nextPage: string;
  previousPage: string;
  fetchNextPage: () => void;
  fetchPreviousPage: () => void;
  getPokemonDetails: (url: string) => void;
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
};