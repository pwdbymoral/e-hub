import React from "react";
import { Link, router } from "expo-router";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBttn from "../components/CustomBttn";

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-top items-center h-full px-4">
        <Image
          source={require("../assets/images/Logo_hub.png")}
          className="w-[180px] h-[144px] mt-20"
          resizeMode="contain"
        />
        <View className="relative mt-2">
          <Text className="text-white text-xl font-regular text-center">
            Seu
            <Text className="text-accent font-bold"> Hub </Text>
            de
          </Text>
          <Text className="text-accent  text-3xl font-extrabold text-center">
            E-Sports
          </Text>
        </View>

        <CustomBttn
          title="Login"
          handlePress={() => router.push("/login")}
          containerStyles="w-full h-[56px] mt-64"
        />
        <CustomBttn
          title="Cadastro"
          handlePress={() => router.push("/cadastro")}
          containerStyles="w-full mt-4"
        />
        <Link
          href={"misc/terms"}
          className={`text-white opacity-25 text-sm mt-5`}
        >
          {" "}
          Termos de uso e privacidade
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default index;
