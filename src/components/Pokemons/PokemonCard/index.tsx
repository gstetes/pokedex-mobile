import React from "react";
import { usePokemons } from "../../../hooks/usePokemons";
import { Container, PokemonName } from "./styles";

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  const { getPokemonDetails } = usePokemons();

  return (
    <Container onPress={() => getPokemonDetails(url)}>
      <PokemonName>{name}</PokemonName>
    </Container>
  );
};

export default PokemonCard;
