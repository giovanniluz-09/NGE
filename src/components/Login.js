import { TextInput, View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={"white"} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={"white"} />
        <TouchableOpacity style={styles.button}><Text style={styles.text}>Login</Text></TouchableOpacity>
    </View>
  );
}

const styles = {
    input: {
        padding: 16,
        width: 300,
        height: 60,
        marginTop: 30,
        margin: 15,
        borderWidth: 2,
        borderRadius: 20,
        color: '#fff',
        borderColor: '#fff',
    }, 
    button: {
        alignSelf: 'center',
        width: 200,
        height: 40,
        borderRadius: 50,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        backgroundColor: '#fff',
    },

    text: {
      fontSize: 25,
    }
}