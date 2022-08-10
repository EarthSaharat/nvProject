import {Text, View, Button,TextInput } from "react-native";
// import HomeScreen from "./screen/HomeScreen";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";


function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      //Post update,do somethin with 'route.params.post'
      //For example, sent the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button 
      title='Create Post'
      onPress={()=>navigation.navigate('CreatePost')} 
      />
      <Text style={{ margin: 10 }}>Post:{route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText,setPostText] = React.useState('');

  return(
    //use Fragment
    <>
      <TextInput
      multiline
      placeholder='Plese text here'
      style ={{height:200,padding:10,backgroundColor:'white'}}
      onChangeText={setPostText}
      value = {postText}     
      />
      <Button
      title='Click'
      onPress={()=>{
        //Pass params back to HomeScreen funchion 
        navigation.navigate('Home',{post: postText})

      }}
      />
    
    </>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: { backgroundColor: '#ff8c00' },
          headerTintColor: '#ffff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 30 },
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='CreatePost' component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
