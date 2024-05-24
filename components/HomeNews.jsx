import { View, Text } from "react-native";
import React from "react";
import NewsCard from "./NewsCard";

const HomeNews = () => {
  return (
    <View className="mx-auto flex-col space-y-4 w-2/3">
      <Text className="text-white text-2xl font-bold">Notícias da Semana</Text>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </View>
  );
};

export default HomeNews;
