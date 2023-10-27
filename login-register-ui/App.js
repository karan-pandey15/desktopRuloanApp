import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup } from "./screens";
import Menu from './screens/Menu';
import Carddata from './screens/CardBelowdata/Carddata';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
      name="Carddata"
      component={Carddata}
      options={{
        headerShown: false
      }}
    />
    

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}