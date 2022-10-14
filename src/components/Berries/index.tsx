import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Drawer from "react-native-drawer";
import { useBerries } from "../../hooks/useBerries";
import PokemonCard from "../Pokemons/PokemonCard";
import BerryCard from "./BerryCard";
import BerryDrawerContent from "./BerryDrawerContent";
import { Container, Title } from "./styles";

const Berries: React.FC = () => {
  const { selectedBerry, setSelectedBerry, berries } = useBerries();
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    if (selectedBerry) setDrawerVisible(true);
  }, [selectedBerry]);

  return (
    <Drawer
      type="displace"
      open={drawerVisible}
      openDrawerOffset={20}
      tapToClose
      onClose={() => {
        setDrawerVisible(false);
        setSelectedBerry(null);
      }}
      content={<BerryDrawerContent berry={selectedBerry} />}
    >
      <Container>
        <Title>Berries</Title>
        <FlatList
          data={berries}
          renderItem={({ item }) => (
            <BerryCard name={item?.name} url={item?.url} />
          )}
        />
      </Container>
    </Drawer>
  );
};

export default Berries;
