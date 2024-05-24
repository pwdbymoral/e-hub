import { View } from "react-native";
import React from "react";
import Match from "./Match";

const HomeMatches = () => {
  return (
    <View className="mx-auto my-2 flex-col w-10/12">
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
