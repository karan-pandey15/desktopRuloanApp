import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import User from "./assets/karan.jpg";
import Backups from "./screens/Backups";
import Categories from "./screens/Categories";
import Customize from "./screens/Customize";
import GetPremium from "./screens/GetPremium";
import Home from "./screens/Home";
import RateApp from "./screens/RateApp";
import BankList from "./screens/BankList";



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView >
                <View 
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1,
                    backgroundColor:"#036E8C"
                  }}
                >
                  <Image
                    source={User}
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 50
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#fff"
                    }}
                  >Karan Pandey</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff"
                    }}
                  >Product Manager</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            // backgroundColor: "rgb(3,110,140)",
            backgroundColor: "#036E8C",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Addrupee",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Home}
        />
        <Drawer.Screen
        name="Banklist"
        options={{
          drawerLabel: "BankList",
          title: "Addrupee",
          drawerIcon: () => (
            <FontAwesome name="bank" size={20} color="#808080" />
          )
        }}
        component={BankList}
      />
        <Drawer.Screen
          name="Categories"
          options={{
            drawerLabel: "Loans",
            title: "Addrupee",
            drawerIcon: () => (
              <MaterialIcons name="receipt" size={20} color="#808080" />
            )
          }}
          component={Categories}
        />
        <Drawer.Screen
          name="Customize"
          options={{
            drawerLabel: "Contact us",
            title: "Addrupee",
            drawerIcon: () => (
              <MaterialIcons name="phone" size={20} color="#808080" />
            )
          }}
          component={Customize}
        />
      
        <Drawer.Screen
          name="Backups"
          options={{
            drawerLabel: "Become a Partner",
            title: "Addrupee",
            drawerIcon: () => (
              <MaterialIcons name="people" size={20} color="#808080" />
            )
          }}
          component={Backups}
        />   
    
        <Drawer.Screen
          name="Get Premium"
          options={{
            drawerLabel: "Check cibil",
            title: "Addrupee",
            drawerIcon: () => (
              <MaterialCommunityIcons name="certificate" size={20} color="#808080" />
            )
          }}
          component={GetPremium}
        />
        <Drawer.Screen
          name="Rate this App"
          options={{
            drawerLabel: "Rate this App",
            title: "Addrupee",
            drawerIcon: () => (
              <FontAwesome name="star" size={20} color="#808080" />
            )
          }}
          component={RateApp}
        />
        <Drawer.Screen
        name="Tell a Friend"
        options={{
          drawerLabel: "Tell a Friend",
          title: "Addrupee",
          drawerIcon: () => (
            <FontAwesome name="share" size={20} color="#808080" />
          )
        }}
        component={RateApp}
      />
      
        <Drawer.Screen
        name="Help & Support"
        options={{
          drawerLabel: "Help & Support",
          title: "Addrupee",
          drawerIcon: () => (
            <FontAwesome name="" size={20} color="#808080" />
          )
        }}
        component={RateApp}
      />
    
      </Drawer.Navigator>
    </NavigationContainer> 
  );
}
