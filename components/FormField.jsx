import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  
    return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-white">{title}</Text>
      <View className="border-2 border-neutral-900 w-full h-16 px-4 bg-blue-950 rounded-md focus:border-accent items-center flex-row">
        <TextInput 
            className="flex-1 text-white font-semibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="text-gray-100"
            onChangeText={handleChangeText}
            secureTextEntry={title ==='Password' && !showPassword}
        />
        {title === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!setShowPassword)}>
              <FontAwesome name={!showPassword ? 'eye' : 'eye-slash' } 
                           size={24}
                           color={'gray'} 
                           resizeMode='contain'
                           />
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField