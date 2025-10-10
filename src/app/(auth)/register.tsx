import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function Register(){

    return(
        <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'padding':'height'}
                    className='flex-1'
                >
    
    <View className= 'bg-primary flex-1 justify-center items-center'>      
        <Image
            source={require('../../../assets/images/logo_nge.png')}
        />

        <TextInput className="p-3 w-96 h-16 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8 font-poppins"
            placeholder="Digite seu nome"
            placeholderTextColor={"white"}
        />

        <TextInput className="p-3 w-96 h-16 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8 font-poppins"
            placeholder="Digite seu email"
            placeholderTextColor={"white"}
        />

        <TextInput className="p-3 w-96 h-16 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8 font-poppins"
            placeholder="Digite sua senha"
            placeholderTextColor={"white"}
            secureTextEntry={true}
        />

        <TextInput className="p-3 w-96 h-16 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8 font-poppins"
            placeholder="Confirme sua senha"
            placeholderTextColor={"white"}
            secureTextEntry={true} 
        />

        <Pressable className=' bg-white rounded-full text-primary w-72 h-16 flex justify-center items-center' >
                <Text className='text-primary font-bold text-2xl font-poppins'>Cadastrar</Text>
        </Pressable>

        

    </View>

    </KeyboardAvoidingView>  
     
    
)}