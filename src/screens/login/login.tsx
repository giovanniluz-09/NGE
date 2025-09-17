import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
 

export function Login(){
    return(
        <ScrollView className="bg-sky-950 w-full justify-center items-center">
            <Image
            source={require('../../../assets/images/Logo_NGE.png')}
            />

            <TextInput className="p-3 w-405 h-70 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8"
            placeholder="Email"
            placeholderTextColor={"white"}
            />

            <TextInput className="p-3 w-405 h-70 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8"
            placeholder="Senha"
            placeholderTextColor={"white"}
            />


            
            <Pressable className=' bg-white rounded-full text-sky-950 w-30 h-16 flex justify-center items-center' >
                <Text className='text-sky-950 font-bold text-xl'>Login</Text>
            </Pressable>

            <View className='flex items-center'>

            <Text className='text-white font-thin mt-2'>Não tem uma conta? <Link href={"/../screens/register/register"} className='text-white font-bold mt-2'>crie uma agora</Link></Text>
            </View>

        </ScrollView>
    )}


