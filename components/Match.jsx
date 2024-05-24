import { View, Text, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Match = () => {
  return (
    <View className="h-24 w-[47.25%] m-1 bg-primary-light rounded-lg p-2">
      <View className="flex h-full w-full justify-center items-center">
        {/* info */}
        <View className=" flex-row justify-between items-center w-full">
          <View className="flex items-center w-1/3">
            <Text className="text-white text-xs font-semibold">27/05</Text>
            <Text className="text-white text-xs">TER</Text>
          </View>
          <Image
            source={require("../assets/images/placeholder_league.png")}
            alt="League"
            className="w-8 h-6"
          />
          <View className="w-1/3 flex items-center">
            <FontAwesome size={20} name={"video-camera"} color={"#fafafa"} />
          </View>
        </View>
        {/* match info */}
        <View className="flex flex-row mt-2 items-center justify-between w-full">
          <Image
            source={require("../assets/images/placeholder_team.png")}
            alt="League"
            className="w-8 h-8"
          />
          <View className="flex flex-row items-center justify-between">
            <Text className="text-white text-base font-bold bg-primary rounded px-2 py-1">
              2
            </Text>
            <Text className="text-neutral-400 text-xs">{" x "}</Text>
            <Text className="text-white text-base font-bold bg-primary rounded px-2 py-1">
              3
            </Text>
          </View>
          <Image
            source={require("../assets/images/placeholder_team.png")}
            alt="League"
            className="w-8 h-8"
          />
        </View>
      </View>
    </View>
  );
};

export default Match;
