import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import { BerriesProvider } from "./src/hooks/useBerries";
import { PokemonsProvider } from "./src/hooks/usePokemons";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <PokemonsProvider>
      <BerriesProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="dark" translucent={false} />
          <Home />
        </SafeAreaView>
      </BerriesProvider>
    </PokemonsProvider>
  );
}
