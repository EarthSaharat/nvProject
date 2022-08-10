import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: { backgroundColor: '#ff8c00' },
          headerTintColor:'#ffff',
          headerTitleStyle: {fontWeight: 'bold' ,fontSize:30}
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
