import { Link, router } from 'expo-router';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    TextInput,
    View
} from 'react-native';




// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const handleLogin = () => {

// }

// const goToRegister =  () => {
//     router.push('/register');
// }


const goToRegister = () => {
    console.log('Rota encontrada');
    router.push('/(auth)/register');
}


export function Login(){
    return(
        <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'padding':'height'}
                    className='flex-1'
                >
        <View className="bg-primary w-full h-full flex-1 justify-center items-center">
            

            
                <Image
                source={require('../../../assets/images/logo_nge.png')}
                />


                
                <TextInput className="p-3 w-96 h-16 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8 font-poppins"
                placeholder=" Email"
                placeholderTextColor={"white"}
                />

                <TextInput className="p-3 w-96 h-16 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8 font-poppins"
                placeholder=" Senha"
                placeholderTextColor={"white"}
                secureTextEntry={true}
                />

                
                
                
                <Pressable className=' bg-white rounded-full text-sky-950 w-72 h-16 flex justify-center items-center ' >
                    <Text className='text-primary font-bold text-2xl font-poppins'>Login</Text>
                </Pressable>

                
                <Text className='text-white font-thin mt-2 font-poppins '>
                    Não tem uma conta? <Text className='text-white font-bold mt-2 font-poppins'>crie uma conta</Text>
                </Text>




                <Pressable onPress={goToRegister}>
                    <Text>Test</Text>
                </Pressable>

                <Link href={'/register'}> REGISTER</Link>

                

        </View>

        </KeyboardAvoidingView>
    )}


