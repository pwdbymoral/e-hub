import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";

const NewsCard = ({ news }) => {
  const elapsedTime = moment(news.hour).fromNow();

  return (
    <View className="my-2 bg-primary-light rounded-lg w-full h-64">
      <Image
        source={require("../assets/images/placeholder_news.jpg")}
        alt="Abaxial"
        className="w-full h-36 rounded-t-lg"
      />
      <View className="px-4 my-auto space-y-2">
        <Text className="text-white text-xl w-full font-semibold">
          {news.title}
        </Text>
        <View className="flex flex-row items-center w-full space-x-1">
          <View className="w-6 h-6 bg-accent rounded-full" />
          <Text className="text-white">{news.autor}</Text>
          <Text className="text-neutral-400 text-xs">{`- ${elapsedTime}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;
