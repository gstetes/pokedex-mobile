import React, { useEffect, useRef, useState } from "react";

import { Container, Title } from "./styles";

import { FlatList, Alert } from "react-native";
import { usePokemons } from "../../hooks/usePokemons";
import PokemonCard from "./PokemonCard";
import Drawer from "react-native-drawer";
import PokemonDrawerContent from "./PokemonDrawerContent";

const Pokemons: React.FC = () => {
  const { pokemons, selectedPokemon, setSelectedPokemon } = usePokemons();
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    if (selectedPokemon) setDrawerVisible(true);
  }, [selectedPokemon]);

  return (
    <Drawer
      type="displace"
      open={drawerVisible}
      openDrawerOffset={20}
      tapToClose
      onClose={() => {
        setDrawerVisible(false);
        setSelectedPokemon(null);
      }}
      content={<PokemonDrawerContent pokemon={selectedPokemon} />}
    >
      <Container>
        <Title>Pokemons</Title>
        <FlatList
          data={pokemons}
          renderItem={({ item }) => (
            <PokemonCard name={item?.name} url={item?.url} />
          )}
        />
      </Container>
    </Drawer>
  );
};

export default Pokemons;
