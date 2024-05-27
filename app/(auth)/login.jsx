import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { router, Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBttn from "../../components/CustomBttn";
import FormField from "../../components/FormField";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-top min-h-[24vh] px-4 my-6">
        <Image
          source={require("../../assets/images/Logo_hub.png")}
          className="w-[80px] h-[80px] mx-auto mt-8"
          resizeMode="contain"
        />
        <Text className="text-white text-center text-3xl font-semibold mt-5">
          Bem-vindo de volta!
        </Text>
        <FormField
          title="E-mail"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
        />
        <CustomBttn
          title="Login"
          handlePress={() => router.push("../(tabs)/home")}
          containerStyles="w-full h-[56px] mt-32"
          isLoading={isSubmitting}
        />
        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-md text-gray-100">Não tem uma conta?</Text>
          <Link
            href={"/cadastro"}
            className="text-md font-semibold text-accent"
          >
            Cadastre-se já!
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
