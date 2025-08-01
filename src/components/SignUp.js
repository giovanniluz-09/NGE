import { Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Logo from './Logo.js';

const windowHeight = Dimensions.get('window').height;

export default function SignUp({ navigation }) {
    return (
        <ScrollView  contentContainerStyle={styles.container}>
            <Logo />
            <Text style={styles.title}>Criar minha Conta</Text>
            <TextInput style={styles.input} placeholder="Digite seu Nome *" placeholderTextColor={"white"} />
            <TextInput style={styles.input} placeholder="Digite seu Email *" placeholderTextColor={"white"} />
            <TextInput style={styles.input} placeholder="Digite sua Senha *" placeholderTextColor={"white"} />
            <TextInput style={styles.input} placeholder="Confirme sua Senha *" placeholderTextColor={"white"}  />
            <TouchableOpacity style={styles.cadastro} onPress={() => navigation.navigate('Card')}>  <Text style={styles.textCadastro}>Cadastrar</Text>  </TouchableOpacity>
            <Text style={styles.acount} onPress={() => navigation.navigate('Login')}>Já possui uma conta?</Text>
        </ScrollView>
        
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0C1E34',
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight * 1.05
    },
    button: {
        backgroundColor: 'none',
        margin: 20,
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 8,
        fontFamily: 'Poppins_400Regular',
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
        fontFamily: 'Poppins_400Regular',
    },
    cadastro: {
        alignSelf: 'center',
        width: 200,
        height: 40,
        borderRadius: 50,
        marginTop: 20,
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
        fontFamily: 'Poppins_400Regular',
    },
    acount: {
        fontSize: 15,
        padding: 10,
        color: '#fff',
        fontFamily: 'Poppins_400Regular',
    },
});