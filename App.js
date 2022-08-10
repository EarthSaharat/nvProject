import {Text, View, Button,TextInput } from "react-native";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='FirstPage'
        screenOptions={{
          headerStyle: { backgroundColor: '#ff8c00' },
          headerTintColor: '#ffff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 30 },
        }}
      >
        <Stack.Screen name='First Page' component={FirstPage} />
        <Stack.Screen name='Second Page' component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
