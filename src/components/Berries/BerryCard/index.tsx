import React from "react";
import { useBerries } from "../../../hooks/useBerries";
import { Container, PokemonName } from "./styles";

interface BerryCardProps {
  name: string;
  url: string;
}

const BerryCard: React.FC<BerryCardProps> = ({ name, url }) => {
  const { getBerryDetails } = useBerries();

  return (
    <Container onPress={() => getBerryDetails(url)}>
      <PokemonName>{name}</PokemonName>
    </Container>
  );
};

export default BerryCard;
