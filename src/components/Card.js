import { Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';

export default function Card({ navigation }){
    return(
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Área de Cartões</Text>
    <Image styles={styles.card} source={require('../../assets/cartao_erik.png')}>
    </Image>
    <Text sytle={styles.back} onPress={() => navigation.navigate('SignUp')}> Voltar</Text>
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
        width: 557,
        height: 361,
        alignItems: 'center',
        justifyContent: 'center',
    },
})




