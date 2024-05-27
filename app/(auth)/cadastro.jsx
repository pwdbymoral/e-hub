import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Redirect, router, Link } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomBttn from '../../components/CustomBttn'
import FormField from '../../components/FormField';

const cadastro = () => {
  const [form, setForm] = useState({
    usuario: '',
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

}

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className='w-full justify-top min-h-[24vh] px-4 my-6'>
        <Image
            source={require('../../assets/images/Logo_hub.png')}
            className="w-[80px] h-[80px] mx-auto mt-8"
            resizeMode="contain"
        />
        <Text className='text-white text-center text-2xl font-semibold mt-5 flex'>Seja bem vindo ao seu novo <Text className="text-accent font-bold text-3xl"> Hub </Text> </Text>
        <FormField
          title="Usuário"
          value={form.user}
          handleChangeText={(e) => setForm({...form, user: e})}
          otherStyles="mt-4"
        />
        <FormField
          title="E-mail"
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          otherStyles="mt-4"
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          otherStyles="mt-4"
        />
        <CustomBttn
          title="Cadastre-se"
          handlePress={() => router.push("../(tabs)/home")}
          containerStyles="w-full h-[56px] mt-8"
          isLoading={isSubmitting}
        />
      <View className="justify-center pt-5 flex-row gap-2">
        <Text className="text-md text-gray-100">
          Já tem uma conta?
        </Text>
        <Link href={"/login"} className="text-md font-semibold text-accent">Pegue o caminho certo!</Link>
      </View>
        
      </View>
    </SafeAreaView>
  )
}

export default cadastro