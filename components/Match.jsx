import { View, Text, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Match = ({ match, larger }) => {
  const date = new Date(match.date)
    .toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    })
    .replace(/^\w/, (c) => c.toUpperCase());

  const weekday = new Date(match.date)
    .toLocaleDateString("pt-BR", {
      weekday: "short",
    })
    .substring(0, 3)
    .toUpperCase();

  return (
    <View className="h-24 bg-primary-light rounded-lg p-2">
      <View
        className={`flex h-full w-full justify-center items-center ${larger ? "w-11/12 mx-auto" : ""}`}
      >
        <View className="flex-row justify-between items-center w-full">
          <View className="flex items-center w-1/3">
            <Text className="text-white text-xs font-semibold">{date}</Text>
            <Text className="text-neutral-300 text-xs">{weekday}</Text>
          </View>
          <Image
            source={require("../assets/images/placeholder_league.png")}
            alt="League"
            className="w-8 h-6"
          />
          <View className="w-1/3 flex items-center">
            <FontAwesome size={20} name={"external-link"} color={"#fafafa"} />
          </View>
        </View>
        <View
          className={`flex flex-row mt-2 items-center justify-between w-full ${larger ? "w-10/12 mx-auto" : ""}`}
        >
          <Image
            source={require("../assets/images/placeholder_team.png")}
            alt="Home team"
            className="w-8 h-8"
          />
          <View className="flex flex-row items-center justify-between">
            <Text
              className={`text-white text-base font-bold bg-primary rounded px-2 py-1 ${larger ? "px-4 mx-1" : "px-2"}`}
            >
              {match.homeTeamScore}
            </Text>
            <Text className="text-neutral-400 text-xs">{" x "}</Text>
            <Text
              className={`text-white text-base font-bold bg-primary rounded px-2 py-1 ${larger ? "px-4 mx-1" : "px-2"}`}
            >
              {match.awayTeamScore}
            </Text>
          </View>
          <Image
            source={require("../assets/images/placeholder_team.png")}
            alt="Away team"
            className="w-8 h-8"
          />
        </View>
      </View>
    </View>
  );
};

export default Match;
