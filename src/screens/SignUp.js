import { Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import Logo from './Logo.js';
import { validarEmail, validarSenha, validarCampoObrigatorio, validarSenhasIguais } from '../utils/validacoes';

const windowHeight = Dimensions.get('window').height;

export default function SignUp({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleCadastro = () => {
        if (!validarCampoObrigatorio(nome) || !validarCampoObrigatorio(email) || 
            !validarCampoObrigatorio(senha) || !validarCampoObrigatorio(confirmarSenha)) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios');
            return;
        }

        if (!validarEmail(email)) {
            Alert.alert('Erro', 'Por favor, insira um email válido');
            return;
        }

        if (!validarSenha(senha)) {
            Alert.alert('Erro', 'A senha deve ter no mínimo 6 caracteres');
            return;
        }

        if (!validarSenhasIguais(senha, confirmarSenha)) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return;
        }

        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
            { text: 'OK', onPress: () => navigation.navigate('Card') }
        ]);
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Logo />
                <Text style={styles.title}>Criar minha Conta</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite seu Nome *" 
                    placeholderTextColor={"white"}
                    value={nome}
                    onChangeText={setNome}
                    autoCapitalize="words"
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite seu Email *" 
                    placeholderTextColor={"white"}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite sua Senha *" 
                    placeholderTextColor={"white"}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Confirme sua Senha *" 
                    placeholderTextColor={"white"}
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.cadastro} onPress={handleCadastro}>
                    <Text style={styles.textCadastro}>Cadastrar</Text>
                </TouchableOpacity>
                <Text style={styles.acount} onPress={() => navigation.navigate('Login')}>
                    Já possui uma conta?
                </Text>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#0C1E34',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: windowHeight,
        paddingVertical: 20,
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
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