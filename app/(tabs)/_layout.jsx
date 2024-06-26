import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";

function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E9D62D",
        tabBarInactiveTintColor: "#FAFAFA",
        tabBarActiveBackgroundColor: "#2F395C",
        tabBarInactiveBackgroundColor: "#0D173A",
        tabBarStyle: {
          borderTopWidth: 0,
          shadowColor: "transparent",
          height: 60,
        },
        headerTintColor: "#E9D62D",
        headerTitle: "E-hub",
        headerStyle: {
          backgroundColor: "#0C163C",
          borderBottomWidth: 2,
          borderBottomColor: "#2F395C",
          shadowColor: "transparent",
        },
        headerTitleStyle: {
          fontSize: 26,
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: "Partidas",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="gamepad" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "Notícias",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="newspaper-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
