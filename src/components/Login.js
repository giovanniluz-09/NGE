import { TextInput, View, StyleSheet, Text, TouchableOpacity, ScrollView, Button } from "react-native";
import React from 'react';
import Logo from "./Logo.js";

export default function Login({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={"white"} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={"white"} />
  <TouchableOpacity style={styles.login}><Text style={styles.textLogin}>Login</Text></TouchableOpacity>
  <Button style={styles.button} title="Cadastrar" onPress={() => navigation.navigate('SignUp')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0C1E34',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },  
    button: {
      background: '#0C1E34',
      margin: 20,
    },
    input: {
        padding: 16,
        width: 300,
        height: 55,
        marginTop: 30,
        margin: 15,
        borderWidth: 2,
        borderRadius: 20,
        color: '#fff',
        borderColor: '#fff',
    }, 
    login: {
        alignSelf: 'center',
        width: 200,
        height: 40,
        borderRadius: 50,
        marginTop: 30,
      
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
    },
    textCadastrar: {
      fontSize: 16,
      color : '#fff',
    },
})
