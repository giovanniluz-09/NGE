import { Text, StyleSheet, View, Image } from 'react-native';

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

const styles = {
    logo: {
        width: 174,
        height: 77,
    },
    subtitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        textAlign: 'center',
    },
    };