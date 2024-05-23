import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Main = ({ children }) => {
  return (
    <SafeAreaView className="bg-primary h-full w-full">{children}</SafeAreaView>
  );
};

export default Main;
