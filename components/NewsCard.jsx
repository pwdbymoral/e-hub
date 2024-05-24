import { View, Text, Image } from "react-native";
import React from "react";

const NewsCard = () => {
  return (
    <View className="my-2 bg-primary-light rounded-lg w-full h-60">
      <Image
        source={require("../assets/images/placeholder_news.jpg")}
        alt="Abaxial"
        className="w-full h-36 rounded-t-lg"
      />
      <View className="px-4 my-auto space-y-2">
        <Text className="text-white text-xl w-full font-semibold">
          Furo: brTT é contratado pela LOS
        </Text>
        <View className="flex flex-row items-center w-full space-x-1">
          <View className="w-6 h-6 bg-accent rounded-full" />
          <Text className="text-white">Autor</Text>
          <Text className="text-neutral-400 text-xs">- Há 3 minutos</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;
