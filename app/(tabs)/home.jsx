import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HomeNews from "../../components/HomeNews";
import HomeMatches from "../../components/HomeMatches";

const home = () => {
  return (
    <SafeAreaView>
      <ScrollView className="bg-primary">
        <HomeMatches matches={placeholderMatches} />
        <HomeNews newsList={placeholderNews} />
      </ScrollView>
    </SafeAreaView>
  );
};

const placeholderMatches = [
  {
    date: "2022-01-01",
    competition: "Premier League",
    leagueImage: "",
    homeTeamImage: "",
    awayTeamImage: "",
    homeTeamScore: "1",
    awayTeamScore: "2",
  },
  {
    date: "2022-01-02",
    competition: "League Cup",
    leagueImage: "",
    homeTeamImage: "",
    awayTeamImage: "",
    homeTeamScore: "3",
    awayTeamScore: "1",
  },
];

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

export default home;
