import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
 

export function Login(){
    return(
        <ScrollView className="bg-sky-950 w-full justify-center items-center">
            <Image
            source={require('../../../assets/images/logo_nge.png')}
            />

            <TextInput className="p-3 w-405 h-70 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8 font-poppins"
            placeholder="Email"
            placeholderTextColor={"white"}
            />

            <TextInput className="p-3 w-405 h-70 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8 font-poppins"
            placeholder="Senha"
            placeholderTextColor={"white"}
            />


            
            <Pressable className=' bg-white rounded-full text-sky-950 w-30 h-16 flex justify-center items-center ' >
                <Text className='text-sky-950 font-bold text-xl font-poppins'>Login</Text>
            </Pressable>

            <View className='flex items-center'>

            <Text className='text-white font-thin mt-2 font-poppins'>Não tem uma conta? <Text className='text-white font-bold mt-2 font-poppins'>crie uma agora</Text></Text>
            </View>

        </ScrollView>
    )}


