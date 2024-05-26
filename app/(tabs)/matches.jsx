import { View, Text } from "react-native";
import React from "react";
import Match from "../../components/Match";

const matches = () => {
  return (
    <View className="flex-1 items-center bg-primary py-4">
      <View className="flex flex-col items-center w-10/12">
        {placeholderMatches
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .reduce((previousValue, currentValue) => {
            const date = new Date(currentValue.date)
              .toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
              })
              .replace(/^\w/, (c) => c.toUpperCase());

            const existingDay = previousValue.find(
              (item) => item.date === date
            );

            if (existingDay) {
              existingDay.matches.push(currentValue);
            } else {
              previousValue.push({
                date,
                matches: [currentValue],
              });
            }

            return previousValue;
          }, [])
          .map(({ date, matches }) => (
            <View key={date} className="flex flex-col items-center my-4">
              <Text className="text-white font-semibold">{date}</Text>
              {matches.map((match, index2) => (
                <View className="my-2" key={index2}>
                  <Match match={match} larger />
                </View>
              ))}
            </View>
          ))}
      </View>
    </View>
  );
};

const placeholderMatches = [
  {
    date: "2022-10-11T00:00:00.000Z",
    competition: "Premier League",
    leagueImage: "",
    homeTeamImage: "",
    awayTeamImage: "",
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeTeamScore: "1",
    awayTeamScore: "2",
  },
  {
    date: "2022-10-10T00:00:00.000Z",
    competition: "Premier League",
    leagueImage: "",
    homeTeamImage: "",
    awayTeamImage: "",
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeTeamScore: "1",
    awayTeamScore: "2",
  },
  {
    date: "2022-10-12T00:00:00.000Z",
    competition: "Premier League",
    leagueImage: "",
    homeTeamImage: "",
    awayTeamImage: "",
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeTeamScore: "1",
    awayTeamScore: "2",
  },
  {
    date: "2022-10-13T00:00:00.000Z",
    competition: "Premier League",
    leagueImage: "",
    homeTeamImage: "",
    awayTeamImage: "",
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeTeamScore: "1",
    awayTeamScore: "2",
  },
  {
    date: "2022-10-13T00:00:00.000Z",
    competition: "Premier League",
    leagueImage: "",
    homeTeamImage: "",
    awayTeamImage: "",
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    homeTeamScore: "1",
    awayTeamScore: "2",
  },
];
export default matches;
