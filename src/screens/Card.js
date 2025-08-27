import { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image  } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Card({ navigation }){
    const [ passe, setPasse ] = useState('comum');
    const [ cardImage, setCardImage] = useState(require('../../assets/comum.png'))

    const cardImages = {
        comum: require('../../assets/comum.png'),
        universitario: require('../../assets/universitario.png'),
        escolar: require('../../assets/escolar.png')
    }

    const handleValueChange = (value) => {
        setPasse(value);
        setCardImage(cardImages[value])
    }

    return (
    <View style={styles.container}>
    <Text style={styles.title}>Área de Cartões</Text>
    <RNPickerSelect
    onValueChange={handleValueChange}
    placeholder={{label: 'Selecione seu Cartão'}}
    items={[
        {label: 'Comum Tanaka', value: 'comum', color: 'gray'},
        {label: 'Universitario Nicolas', value: 'universitario', color: 'gray'},
        {label: 'Escolar Giovanni', value: 'escolar', color: 'gray'}
    ]}
    value={passe}
    />
    <Image style={styles.card} source={cardImage} />
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
        margin: 10,
        fontFamily: 'Poppins_400Regular',
    },
    back: {
        color: '#fff',
        fontSize: 19,
        fontFamily: 'Poppins_400Regular',
    }
})