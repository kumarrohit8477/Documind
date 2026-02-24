import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons'; 

const _layout = () => {
   return (
      <Tabs
         screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#496868",
            tabBarInactiveTintColor: "#999999",
         }}
      >
         <Tabs.Screen
            name="index"
            options={{
               title: "Home",
               tabBarIcon: ({ color }) => (
                  <FontAwesome name="home" size={24} color={color} />
               ),
            }}
         />
         <Tabs.Screen
            name="scan"
            options={{
               title: "Scan",
               tabBarIcon: ({ color }) => (
                  <FontAwesome name="qrcode" size={24} color={color} />
               ),
            }}
         />
         <Tabs.Screen
            name="search"
            options={{
               title: "Search",
               tabBarIcon: ({ color }) => (
                  <FontAwesome name="search" size={24} color={color} />
               ),
            }}
         />
      </Tabs>
   );
};

export default _layout;