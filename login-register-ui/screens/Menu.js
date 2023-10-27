import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const jsonData = [
  { image: require("../assets/img/gg.png"), text: "PL", color: "#D2FDF4" },
  { image: require("../assets/img/hl.png"), text: "HL", color: "#FFF3E7" },
  { image: require("../assets/img/mcc.png"), text: "Apply Credit Card", color: "#FFF3E7" },
  { image: require("../assets/img/ds.png"), text: "MFC Dashboard", color: "#FCF1F3" },
  { image: require("../assets/img/ds.png"), text: "Lead Dashboard", color: "#E9F6FE" },
  { image: require("../assets/img/cc.png"), text: "My Credit Card", color: "#D2FDF4" },
];

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Text style={{fontSize:20}} >Hello Karan!</Text>
      <FlatList
        data={jsonData}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => navigation.navigate('Carddata')}
          >
            <View style={styles.imgContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 150,
    height: 160,
    borderRadius: 10,
    margin: 20,
    padding: 10,
    alignItems: "center",
    elevation: 3,
  },
  imgContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(255,255,255)',
    marginRight: 70,
    marginTop: 10,
    borderRadius: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 10,
  },
  text: {
    marginTop: 50,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Menu;
