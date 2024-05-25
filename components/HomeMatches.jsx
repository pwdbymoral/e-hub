import { View } from "react-native";
import React from "react";
import Match from "./Match";

const HomeMatches = ({ matches }) => {
  return (
    <View className="mx-auto my-2 flex-col w-10/12">
      <View className="flex flex-row flex-wrap justify-center">
        {matches.map((match) => (
          <Match key={match.date} match={match} />
        ))}
      </View>
    </View>
  );
};

export default HomeMatches;
