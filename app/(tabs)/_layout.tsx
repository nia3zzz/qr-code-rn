import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Scan QR Code",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/qrcode-icons/read-qr-code.png")}
              style={{ width: 28, height: 28, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="generator"
        options={{
          title: "Generate QR Code",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../assets/qrcode-icons/generate-qr-code.png")}
              style={{ width: 28, height: 28, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
