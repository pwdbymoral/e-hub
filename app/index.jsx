import React from "react";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

const index = () => {
  return (
    <View className="bg-primary flex-1 items-center justify-center h-screen">
      <Text className="text-accent text-4xl font-bold">E-hub</Text>
      <Redirect href="/(tabs)/home" />
    </View>
  );
};

export default index;
