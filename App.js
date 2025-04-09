import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack'; 
import Login from './src/components/Login.js';
import SignUp from './src/components/SignUp.js';

export default function App() {
  return (
    <NavigationContainer>

      <View style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <SignUp />
      <StatusBar style="light" />
      </ScrollView>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
