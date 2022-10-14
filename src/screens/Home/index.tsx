import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import Pokemons from "../../components/Pokemons";
import Berries from "../../components/Berries";

const Tab = createBottomTabNavigator();

const Home: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#BBB",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Pokemons":
                iconName = "home";
                break;
              case "Berries":
                iconName = "chevrons-up";
                break;
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#EF5350",
          tabBarInactiveTintColor: "#999",
          tabBarInactiveBackgroundColor: "#FFF",
          tabBarShowLabel: true,
        })}
        initialRouteName="Products"
      >
        <Tab.Screen name="Pokemons" component={Pokemons} />
        <Tab.Screen name="Berries" component={Berries} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Home;
