import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from '@expo/vector-icons'

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Todos",tabBarIcon:({color,size})=>(<Ionicons name='flash-outline' size={size} color={color}/>) }} />
      <Tabs.Screen name="settings" options={{ title: "Settings", tabBarIcon:({color,size})=>(<Ionicons name='settings' color={color} size={size}/>) }} />
    </Tabs>
  );
}

export default TabLayout