import { View, Text, Button } from "react-native";
import React from "react";
import { styles } from "./components/style";

const FirstPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.textTopStyle}>This is the First Page</Text>
        <Button
          title="Go to the second page"
          onPress={() => navigation.navigate("Second Page")}
        />
        <Button
          title="Go to the third page"
          onPress={() => navigation.navigate("Third Page")}
        />
        
      </View>
      <Text style={styles.textBottomStyle}>
          Thai-Nichi Institute of Technology
        </Text>
    </View>
  );
};

export default FirstPage;
