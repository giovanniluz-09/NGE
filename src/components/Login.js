import { TextInput, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Logo from "./Logo.js";


export default function Login() {
  return (
    <View>
      <Logo />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={"white"} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={"white"} />
        <TouchableOpacity style={styles.login}><Text style={styles.textLogin}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.cadastrar}><Text style={styles.textCadastrar}>Cadastrar</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
