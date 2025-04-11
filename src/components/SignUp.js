import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Logo from './Logo.js';

export default function SignUp({ navigation }) {
    return (
    <View>
    <Logo />
    <Text style={styles.title}>Criar minha Conta</Text>
    <TextInput style={styles.input} placeholder="Digite seu Nome *" placeholderTextColor={"white"} />
    <TextInput style={styles.input} placeholder="Digite seu Email *" placeholderTextColor={"white"} />
    <TextInput style={styles.input} placeholder="Digite sua Senha *" placeholderTextColor={"white"} />
    <TextInput style={styles.input} placeholder="Confirme sua Senha *" placeholderTextColor={"white"} />
        <TouchableOpacity style={styles.cadastro}><Text style={styles.textCadastro}>Cadastrar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.login}><Text style={styles.textLogin}>Ja possui uma conta?</Text></TouchableOpacity>
    </View>
    );
 }

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 8,
    },
    input: {
        padding: 16,
        width: 300,
        height: 55,
        margin: 12,
        borderWidth: 2,
        borderRadius: 20,
        color: '#fff',
        borderColor: '#fff',
    },
    cadastro: {
        alignSelf: 'center',
        width: 200,
        height: 40,
        borderRadius: 50,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    login: {
        alignSelf: 'center',
        width: 200,
        height: 40,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCadastro: {
        fontSize: 25,
        fontWeight: '400',
    },
    textLogin: {
        fontSize: 16,
        color : '#fff',
    },
});