import { View, Text } from "react-native";
import React from "react";
import Match from "./Match";

const HomeMatches = () => {
  return (
    <View className="mx-auto mb-2 flex-col w-10/12">
      <Text className="text-white text-2xl mb-1 font-bold">Partidas</Text>
      <View className="flex flex-row flex-wrap justify-center">
        <Match />
        <Match />
        <Match />
        <Match />
      </View>
    </View>
  );
};

export default HomeMatches;
