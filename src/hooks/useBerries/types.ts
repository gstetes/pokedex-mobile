import { Dispatch, SetStateAction } from "react";

export interface IBerry {
  name: string;
  url: string;
};

export interface IBerryDetails {
  id: number;
  name: string;
  item: {
    name: string;
    url: string;
  };
  firmness: {
    name: string;
    url: string;
  };
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  natural_gift_type: {
    name: string;
    url: string;
  };
  size: number;
  smoothness: number;
  soil_dryness: number;
}

export interface BerriesContextData {
  berries: IBerry[];
  setBerries: Dispatch<SetStateAction<IBerry[]>>;
  selectedBerry: IBerryDetails | null;
  setSelectedBerry: Dispatch<SetStateAction<IBerryDetails | null>>;
  nextPage: string;
  previousPage: string;
  fetchNextPage: () => void;
  fetchPreviousPage: () => void;
  getBerryDetails: (url: string) => void;
};