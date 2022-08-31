import { View, Text, Button } from "react-native";
import React from "react";
import { styles } from "./components/style";

const ThirdPage = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.textTopStyle}>This is the Third Page</Text>
        <Button
          title="Go to the First page"
          onPress={() => navigation.navigate("Frist Page")}
        />
        <Button
          title="Go to the second page"
          onPress={() => navigation.navigate("Second Page")}
        />
        
      </View>
      <Text style={styles.textBottomStyle}>
          Thai-Nichi Institute of Technology
        </Text>
    </View>
  )
}

export default ThirdPage

