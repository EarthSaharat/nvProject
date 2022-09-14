import { StyleSheet, Text, View,Button ,SafeAreaView} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons' 

import {NavigationContainer, DefaultTheme } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255,45,85)",
  },
};

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => alert("ลงทะเบียน")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="home" size={30} color="#dc143c" />
      <Text>Home Screen</Text>
     
    </View>
  );
};

function SettingScreen({ navigation }){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text >Setting Screen</Text>
      <Button
      title='go to Home'
      onPress={()=> navigation.navigate("Home")}
      />
    </View>
  )
} 

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if(route.name==='Home'){
            iconName = focused
            ?'ios-information-circle'
            :'ios-information-circle-outline'

          }else if (route.name === 'Setting'){
            iconName = focused ?'ios-list':'ios-list-outline'
          }
          //you can return any component that you like here
          return <Ionicons name={iconName} size={size} color={color}/>;
        },
        tabBarActiveTintColor:'tomato',
        tabBarInactiveTintColor:'gray',

      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Setting" component={SettingScreen}/>
    </Tab.Navigator>
  );
}
function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Setting" component={MyTabs} />
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})