import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const ProductScreen = ({navigation}) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [error, setError] = useState(null);

  const getData = async () => {
    /* setLoading(true);
    const res = await axios.get("https://api.codingthailand.com/api/course");
    console.log(res.data.data);
    //alert(JSON.stringify(res.data.data));
    setProduct(res.data.data);
    setLoading(false) */
    try {
      setLoading(true);
      const res = await axios.get("https://api.codingthailand.com/api/course");
      console.log(res.data.data);
      //alert(JSON.stringify(res.data.data));
      setProduct(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); //set error ไป state's error ว่าเกิดจาก axios หรือ server
    }
  };


  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="Blue" size="large" />
      </View>
    );
  }

  if (error) {
    //if error , it will return this UI
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
        <Text>เกิดข้อผิดพลาด ไม่สามารถติดต่อเซิฟเวอร์ได้</Text>
      </View>
    );
  }

  const _onRefresh = () => {
    getData(id);
  };

  const _renderItem = ({ item }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity 
          style={styles.addButtonStyle} 
          onPress = {()=>{
          navigation.navigate('Detail',{
            id:item.id,
            title:item.title
          })
        }}
        ><View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
          <Image
            resizeMode="cover"
            source={{ uri: item.picture }}
            style={styles.thumbnail}
          />
          <View style={styles.dataContainer}>
            <View style={styles.dataContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.detail}>{item.detail}</Text>
            </View>
          </View>
        </View>
      </View>
      </TouchableOpacity>
        
      </SafeAreaView>
    );
  };

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        //ItemSeparatorComponent = {ItemSeparatorComponent}
        renderItem={_renderItem}
        refreshing={loading}
        //onRefresh = {_onRefresh}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  dataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
  addButtonStyle: {
    width: "100%",

    marginBottom: 15,
  },
});
