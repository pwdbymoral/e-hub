import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomBttn = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-accent rounded-lg min-h-[42px] min-w-[200px] justify-center items-center ${containerStyles} ${isLoading ? opacity - 50 : ""} `}
      disabled={isLoading}
    >
      <Text className={`text-primary text-lg font-bold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBttn;
