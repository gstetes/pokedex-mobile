import React, { useMemo } from "react";
import { IPokemonDetails } from "../../../hooks/usePokemons/types";
import * as Progress from "react-native-progress";
import { View, Text } from "react-native";
import {
  Container,
  PokemonId,
  PokemonName,
  Informations,
  Status,
} from "./styles";

import ImageSlider from "react-native-image-slider";

interface PokemonDrawerContentProps {
  pokemon: IPokemonDetails;
}

const PokemonDrawerContent: React.FC<PokemonDrawerContentProps> = ({
  pokemon,
}) => {
  const images = useMemo(() => {
    return [
      pokemon?.sprites?.front_default,
      pokemon?.sprites?.back_default,
      pokemon?.sprites?.front_shiny,
      pokemon?.sprites?.back_shiny,
    ];
  }, [pokemon]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "hp":
        return "#F00";
      case "attack":
        return "#ff8800";
      case "defense":
        return "#008cff";
      case "special-attack":
        return "#ff7300";
      case "special-defense":
        return "#1302a5";
      case "speed":
        return "#0de90d";
      default:
        return null;
    }
  };

  return (
    <Container>
      <PokemonId>ID: {pokemon?.id}</PokemonId>
      <PokemonName>{pokemon?.forms[0]?.name}</PokemonName>
      <ImageSlider
        images={images}
        style={{ height: 200 }}
        loopBothSides
        autoPlayWithInterval={3000}
      />
      <Informations>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Weight</Text>
          <Text style={{ fontSize: 16 }}>{pokemon?.weight}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Height</Text>
          <Text style={{ fontSize: 16 }}>{pokemon?.height}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Type</Text>
          <Text style={{ fontSize: 16 }}>{pokemon?.types[0]?.type?.name}</Text>
        </View>
      </Informations>

      <Status>
        {pokemon?.stats?.map((stat, i) => (
          <View key={i} style={{ marginLeft: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 20 }}>
              {stat?.stat?.name === "hp"
                ? "HP"
                : stat?.stat?.name === "attack"
                ? "Attack"
                : stat?.stat?.name === "defense"
                ? "Defense"
                : stat?.stat?.name === "special-attack"
                ? "Special attack"
                : stat?.stat?.name === "special-defense"
                ? "Special defense"
                : stat?.stat?.name === "speed"
                ? "Speed"
                : ""}
            </Text>
            <Progress.Bar
              progress={Number(
                Number(((stat?.base_stat / 200) * 100) / 100)?.toFixed(2)
              )}
              color={getStatusColor(stat?.stat?.name)}
              height={15}
            />
          </View>
        ))}
      </Status>
    </Container>
  );
};

export default PokemonDrawerContent;
