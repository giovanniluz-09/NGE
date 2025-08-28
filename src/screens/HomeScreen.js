import { Dimensions, ScrollView, View } from "react-native";
import { Text, StyleSheet, TouchableOpacity, View, Image, ScrollView  } from 'react-native';


const windowHeight = Dimensions.get('window').height;

export default function HomeScreen(){
    return(
        <ScrollView>
        <View style={styles.header}/>    



        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#223245",
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight * 1.05
    },
    header: {
        backgroundColor:"#0C1E34",
        width: 501,
        height: 316,
        borderRadius:30,
    }

})

