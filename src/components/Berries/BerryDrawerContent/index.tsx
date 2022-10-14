import React from "react";
import {
  Container,
  PokemonId,
  PokemonName,
  Informations,
  Status,
} from "./styles";

import { IBerryDetails } from "../../../hooks/useBerries/types";
import { View, Text } from "react-native";

interface BerryDrawerContentProps {
  berry: IBerryDetails;
}

const BerryDrawerContent: React.FC<BerryDrawerContentProps> = ({ berry }) => {
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

  const getFirmnessStatus = (status: string) => {
    switch (status) {
      case "very-soft":
        return <Text style={{ fontSize: 18, color: "#09eff7" }}>Soft</Text>;
      case "soft":
        return <Text style={{ fontSize: 18, color: "#0c95f0" }}>Soft</Text>;
      case "medium":
        return <Text style={{ fontSize: 18, color: "#ddb917" }}>Medium</Text>;
      case "hard":
        return <Text style={{ fontSize: 18, color: "#ff9a01" }}>Hard</Text>;
      case "very-hard":
        return (
          <Text style={{ fontSize: 18, color: "#d12709" }}>Very hard</Text>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <PokemonId>ID: {berry?.id}</PokemonId>
      <PokemonName>{berry?.name}</PokemonName>
      <Informations>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Smoothness</Text>
          <Text style={{ fontSize: 16 }}>{berry?.smoothness}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Size</Text>
          <Text style={{ fontSize: 16 }}>{berry?.size}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Firmness</Text>
          {getFirmnessStatus(berry?.firmness?.name)}
        </View>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Growth time</Text>
          <Text style={{ fontSize: 16 }}>{berry?.growth_time}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Natural gift power
          </Text>
          <Text style={{ fontSize: 16 }}>{berry?.natural_gift_power}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Natural gift type
          </Text>
          <Text style={{ fontSize: 16 }}>{berry?.natural_gift_type?.name}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Max harvest</Text>
          <Text style={{ fontSize: 16 }}>{berry?.max_harvest}</Text>
        </View>
      </Informations>
    </Container>
  );
};

export default BerryDrawerContent;
