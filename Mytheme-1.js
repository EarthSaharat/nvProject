import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import HomeScreen from "./screen/HomeScreen";

import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";

const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(255,45,85)'
  }

}

function FeedScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Feed Screen</Text>
      <Button
        title='open drawer'
        onPress={()=>navigation.openDrawer()}
      />
      <Button
        title='toggle drawer'
        onPress={()=>navigation.toggleDrawer()}
      />
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem 
        label='Close drawer' 
        onPress={()=> props.navigation.closeDrawer()} 
      />
      <DrawerItem 
        label='Toggle drawer' 
        onPress={()=> props.navigation.toggleDrawer()} 
      />
    </DrawerContentScrollView>
  )
}
const Drawer = createDrawerNavigator();


function MyDrawer(){
  return(
    <Drawer.Navigator 
    useLegacyImplementation
    drawerContent={(props)=><CustomDrawerContent {...props}/>}
    screenOptions={{
      drawerStyle:{
        backgroundColor: 'white',
        width:240
      }
    }}
    >
        <Drawer.Screen name="Feed" component={FeedScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer/>
    </NavigationContainer>
  );
};

export default App;
