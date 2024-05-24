import { View, Text } from "react-native";
import React from "react";
import NewsCard from "./NewsCard";

const HomeNews = ({ newsList }) => {
  return (
    <View className="mx-auto my-2 flex-col space-y-4 w-10/12">
      <Text className="text-white text-2xl font-bold">Principais Notícias</Text>
      {newsList.map((news) => (
        <NewsCard news={news} key={news.title} />
      ))}
    </View>
  );
};

export default HomeNews;
