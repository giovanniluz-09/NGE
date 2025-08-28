import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { useFonts ,Poppins_400Regular } from '@expo-google-fonts/poppins';
import Login from './src/components/Login.js';
import SignUp from './src/components/SignUp.js';
import Card from './src/components/Card.js';
import "./global.css"


const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

  return (
    <NavigationContainer>
      <Stack.Navigator inicialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Card" component={Card} options={{ headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
