import { StatusBar, Text, View } from 'react-native';

 

export function Home(){
    return(
       <View className='flex-1 bg-secondary'>
            <StatusBar className='bg-primary' barStyle={"light-content"} translucent={false}/>
            <View className='h-60 p-10 bg-primary items-center justify-center rounded-b-lg'>
                <Text className='font-poppins color-white'>Olá Ricardo Santos</Text>
            </View>
                
       </View>
    )}


 