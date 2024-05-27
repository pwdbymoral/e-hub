import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Standings = ({ teams }) => {
  return (
    <View className="my-2 rounded-lg w-10/12 mx-auto bg-primary-light">
      <View className="bg-blue-900 rounded-t-lg py-2">
        <Text className="text-white text-lg font-semibold text-center">
          Tabela CBLoL
        </Text>
      </View>
      <View className="flex-row py-2 border-b border-b-primary">
        <View className="w-1/6 flex items-center justify-center border-r border-r-primary">
          <AntDesign name="minus" size={24} color="white" />
        </View>
        <View className="w-2/6 flex justify-center items-center border-r border-r-primary">
          <Text className="text-white font-semibold px-2">Time</Text>
        </View>
        <View className="flex-row justify-between w-3/6">
          <View className="items-center w-1/3 flex justify-center  border-r border-r-primary">
            <Text className="text-white font-semibold">P</Text>
          </View>
          <View className="items-center w-1/3 flex justify-center  border-r border-r-primary">
            <Text className="text-white font-semibold">V</Text>
          </View>
          <View className="items-center w-1/3 flex justify-center">
            <Text className="text-white font-semibold">D</Text>
          </View>
        </View>
      </View>

      {teams.map((team) => (
        <View
          key={team.name}
          className="flex-row py-2 border-b border-b-primary"
        >
          <View className="w-1/6 flex items-center justify-center border-r border-r-primary">
            <Text className="text-white font-semibold">{team.position}</Text>
          </View>
          <View className="w-2/6 flex-row space-x-1 justify-center items-center border-r border-r-primary">
            <Image
              source={require("../assets/images/placeholder_team.png")}
              alt="League"
              className="w-8 h-8"
            />
            <Text className="text-white font-semibold px-2">{team.name}</Text>
          </View>
          <View className="flex-row justify-between w-3/6">
            <View className="items-center w-1/3 flex justify-center  border-r border-r-primary">
              <Text className="text-white font-semibold">{team.points}</Text>
            </View>
            <View className="items-center w-1/3 flex justify-center  border-r border-r-primary">
              <Text className="text-white font-semibold">{team.victories}</Text>
            </View>
            <View className="items-center w-1/3 flex justify-center">
              <Text className="text-white font-semibold">{team.defeats}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Standings;
