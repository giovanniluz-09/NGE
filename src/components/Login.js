import { TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, Animated, useState, useEffect } from "react-native";
import React from 'react';
import Logo from "./Logo.js";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

export default function Login({ navigation }) {
 const [fontsLoaded] = useFonts({
  Poppins_400Regular
 })
  //Adição dos botões para navegação entre telas, sendo utilizado o "TouchableOpacity" para colocar o "OnPress" - Nicolas Santos
  return (
    <Animated.ScrollView contentContainerStyle={styles.container}>
      <Logo />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={"white"} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={"white"} />
      <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Card')}>
        <Text 
        style={styles.textLogin}> Login </Text>
        </TouchableOpacity>
      <Text style={styles.newaccount} onPress={() => navigation.navigate('SignUp')}> Não tem uma conta? <Text style={{fontWeight: 'bold'}}>Crie uma agora</Text> </Text>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0C1E34',
      alignItems: 'center',
      justifyContent: 'center',
    },  
      button: {
      background: '#0C1E34',
      margin: 20,
    },
    input: {
        padding: 16,
        width: 300,
        height: 55,
        marginTop: 25,
        margin: 15,
        borderWidth: 2,
        borderRadius: 20,
        color: '#fff',
        borderColor: '#fff',
        fontFamily: 'Poppins_400Regular'
    }, 
    login: {
        alignSelf: 'center',
        width: 200,
        height: 40,
        borderRadius: 50,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    cadastrar: {
        alignSelf: 'center', 
        width: 200,
        height: 40,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    textLogin: {
      fontSize: 25,
      fontWeight: '400',
      fontFamily: 'Poppins_400Regular',
    },
    newaccount: {
      fontSize: 15,
      marginTop: 20,
      textAlign: 'center',
      color: '#fff',
      fontFamily: 'Poppins_400Regular',
    }
})
