import { Image, Pressable, ScrollView, Text, TextInput } from 'react-native';


export function Register(){

    return(
    <ScrollView className="bg-sky-950 w-full justify-center items-center">
        <Image
            source={require('../../../assets/images/logo_nge.png')}
        />

        <TextInput className="p-3 w-405 h-70 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8 font-poppins"
            placeholder="Digite seu nome"
            placeholderTextColor={"white"}
        />

        <TextInput className="p-3 w-405 h-70 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8 font-poppins"
            placeholder="Digite seu email"
            placeholderTextColor={"white"}
        />

        <TextInput className="p-3 w-405 h-70 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8 font-poppins"
            placeholder="Digite sua senha"
            placeholderTextColor={"white"}
            secureTextEntry={true}
        />

        <TextInput className="p-3 w-405 h-70 mt-25 m-15 border-2 rounded-[13] color-white border-white mb-8 font-poppins"
            placeholder="Confirme sua senha"
            placeholderTextColor={"white"}
            secureTextEntry={true} 
        />

        <Pressable className=' bg-white rounded-full text-sky-950 w-30 h-16 flex justify-center items-center' >
                <Text className='text-sky-950 font-bold text-xl font-poppins'>Cadastrar</Text>
        </Pressable>


    </ScrollView>  
     
    
)}