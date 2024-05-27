import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeNews from "../../components/HomeNews";

const news = () => {
  return (
    <SafeAreaView className="bg-primary"> 
      <ScrollView>
        <HomeNews newsList={placeholderNews}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const placeholderNews = [
  {
    title: "New League of Legends Update Released",
    autor: "Game Developer",
    hour: "2021-08-15T10:00:00Z",
  },
  {
    title: "The Most Popular Game in the World is Fortnite",
    autor: "Game Analyst",
    hour: "2021-08-10T14:30:00Z",
  },
  {
    title: "New Call of Duty Game Coming Soon",
    autor: "Gaming Website",
    hour: "2021-08-12T09:00:00Z",
  },
  {
    title: "ESL Pro League Season 10 Champion Announced",
    autor: "ESL Announcer",
    hour: "2021-08-15T15:30:00Z",
  },
];

export default news;
