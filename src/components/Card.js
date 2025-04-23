import { Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function Card({ navigation }){
    return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Área de Cartões</Text>
    <Image style={styles.card} source={require('../../assets/cartao_erik.png')} />
    <Text sytle={styles.voltar} onPress={() => navigation.navigate('SignUp')}> Voltar</Text>
    </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#223245',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: 330,
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    title: {
        color: '#fff',
        fontSize: 20,
        margin: 20,
    },
    voltar: {
        color: '#fff',
        fontSize: 21,
    }
})




