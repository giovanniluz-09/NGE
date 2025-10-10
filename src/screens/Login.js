import { TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, Alert, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from 'react';
import Logo from "./Logo.js";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { validarEmail, validarCampoObrigatorio } from '../utils/validacoes';

export default function Login({ navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular
  });

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!validarCampoObrigatorio(email) || !validarCampoObrigatorio(senha)) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (!validarEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido');
      return;
    }

    navigation.navigate('Card');
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardView}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Logo />
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          placeholderTextColor={"white"}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Senha" 
          placeholderTextColor={"white"}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.login} onPress={handleLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.newaccount} onPress={() => navigation.navigate('SignUp')}>
          Não tem uma conta? <Text style={{fontWeight: 'bold'}}>Crie uma agora</Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#0C1E34',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  input: {
    padding: 16,
    width: 300,
    height: 55,
    marginTop: 25,
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
});