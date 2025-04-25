import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

export default function Card({ navigation }){
    return (
    <View style={styles.container}>
    <Text style={styles.title}>Área de Cartões</Text>
    <Image style={styles.card} source={require('../../assets/cartao_erik.png')} />
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.back}>Voltar</Text>
    </TouchableOpacity> 
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#223245',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: 330,
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    title: {
        color: '#fff',
        fontSize: 20,
        margin: 20,
        fontFamily: 'Poppins_400Regular',
    },
    back: {
        color: '#fff',
        fontSize: 19,
        fontFamily: 'Poppins_400Regular',
    }
})




