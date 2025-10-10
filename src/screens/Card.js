import { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Card({ navigation, route }) {
    const [passe, setPasse] = useState('comum');
    const [cardImage, setCardImage] = useState(require('../../assets/comum.png'));

    const cardImages = {
        comum: require('../../assets/comum.png'),
        universitario: require('../../assets/universitario.png'),
        escolar: require('../../assets/escolar.png')
    };

    const cardOptions = [
        { label: 'Comum', value: 'comum', color: 'gray' },
        { label: 'Universitário', value: 'universitario', color: 'gray' },
        { label: 'Escolar', value: 'escolar', color: 'gray' }
    ];

    const handleValueChange = (value) => {
        if (value) {
            setPasse(value);
            setCardImage(cardImages[value]);
        }
    };

    const handleLogout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Área de Cartões</Text>
            <View style={styles.pickerContainer}>
                <RNPickerSelect
                    onValueChange={handleValueChange}
                    placeholder={{ label: 'Selecione seu Cartão', value: null }}
                    items={cardOptions}
                    value={passe}
                    style={pickerSelectStyles}
                />
            </View>
            <Image style={styles.card} source={cardImage} />
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    Tipo de Passe: {cardOptions.find(c => c.value === passe)?.label ?? 'Não selecionado'}
                </Text>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#223245',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    pickerContainer: {
        width: 300,
        marginVertical: 15,
    },
    card: {
        width: 330,
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'Poppins_400Regular',
    },
    infoContainer: {
        marginTop: 10,
        marginBottom: 20,
    },
    infoText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
    },
    logoutButton: {
        backgroundColor: '#0C1E34',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        color: '#fff',
        paddingRight: 30,
        backgroundColor: '#223245',
        fontFamily: 'Poppins_400Regular',
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        color: '#fff',
        paddingRight: 30,
        backgroundColor: '#223245',
        fontFamily: 'Poppins_400Regular',
    },
    placeholder: {
        color: '#ccc',
    },
});