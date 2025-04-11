import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Login from './src/components/Login.js';
import SignUp from './src/components/SignUp.js';

const Stack = createStackNavigator();

/* <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
</ScrollView>
*/
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator inicialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  NavigationContainer: {
    backgroundColor: '#0C1E34'
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#0C1E34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 120,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
});
