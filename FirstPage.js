import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

const FirstPage = ({ navigation }) => {
  const [postText, setPostText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
        <Text style={styles.textStyle}>
          please insert your name to pass it to second screen
        </Text>
        <TextInput
          placeholder="Plese text here"
          style={{
            width: 300,
            padding: 10,
            backgroundColor: "white",
            marginBottom: 10,
          }}
          onChangeText={setPostText}
          value={postText}
        />
        <Button
          title="Click"
          onPress={() =>
            navigation.navigate("Second Page", {
              postText,
            })
          }
        />
      </View>
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",

    marginVertical: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});
