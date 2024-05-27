import { View, Text, Image } from "react-native";
import React from "react";

const profile = () => {
  return (
    <View className="flex-col items-center justify-center bg-primary h-full">
      <View className="flex flex-col items-center justify-center w-10/12 my-4">
        <View className=" bg-neutral-400 rounded-full items-center justify-center border border-primary-light">
          <Image
            source={require("../../assets/images/Logo.png")}
            className="w-24 h-24 rounded-full"
          />
        </View>
        <Text className="text-white mt-2">{placeholder.name}</Text>
      </View>
      <View className="flex items-center justify-center bg-primary-light w-10/12 h-64 rounded-lg">
        <Text className="text-white">
          {"Liga Favorita: "}
          <Text className="text-accent">{placeholder.favoriteLeague}</Text>
        </Text>
        <Text className="text-white mt-2">
          {"Time Favorito: "}
          <Text className="text-accent">{placeholder.favoriteTeam}</Text>
        </Text>
      </View>
    </View>
  );
};

const placeholder = {
  name: "Nome",
  favoriteLeague: "LCS",
  favoriteTeam: "C9",
};

export default profile;
