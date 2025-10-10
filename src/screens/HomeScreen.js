import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Bem-vindo à NGE Transportes</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#223245",
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: windowHeight,
        paddingVertical: 20,
    },
    header: {
        backgroundColor: "#0C1E34",
        width: 350,
        height: 200,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Poppins_400Regular',
    }
});