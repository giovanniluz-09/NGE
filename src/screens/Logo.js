import { StyleSheet, Text, View, Image } from 'react-native';


export default function Logo() {
  return (
    <View>
    <Image
    style={styles.logo}
    source={require('../../assets/nge.png')}
    />
    <Text style={styles.subtitle}>transportes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    logo: {
        width: 176,
        height: 80,
        alignSelf: 'center',
    },
    subtitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'Poppins_400Regular',
    }
});