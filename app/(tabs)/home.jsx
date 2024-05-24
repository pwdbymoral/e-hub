import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import NewsCard from "../../components/NewsCard";
import HomeNews from "../../components/HomeNews";

const home = () => {
  return (
    <SafeAreaView>
      <ScrollView className="bg-primary">
        <HomeNews />
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
