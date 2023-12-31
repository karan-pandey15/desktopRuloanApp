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
  { image: require("../assets/facebook.png"),     text: "" },
  { image: require("../assets/facebook.png"), text: "" },
  { image:require("../assets/facebook.png"), text: "Buisness Loan" },
  { image:require("../assets/facebook.png"), text: "Loan Against Property" }
];

const Card = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={jsonData}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('BlankPage')}
            // onPress={() => navigation.navigate("Register")}
          >
         <Image source={item.image} style={styles.image} />
            
            

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
    marginTop: 80, // Margin from the top
    justifyContent: "center",
    alignItems:"center"
  },
  card: {
    width: 150,
    height: 170,
    borderRadius: 10,
    backgroundColor: "black",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  text: {
    textAlign: "center",
  },
});

export default Card;