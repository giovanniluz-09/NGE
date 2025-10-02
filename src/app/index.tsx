import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';



export default function Index() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
  });

  useEffect(() => {
    if(fontLoaded) {

      setTimeout(() => {
        router.replace('/(auth)/login');
      }, 500);

    } 
  },[fontLoaded]);

  

  if (!fontLoaded) {
      return (
        <View className="flex-1 justify-center items-center bg-blue-600">
        <ActivityIndicator size="large" color="#ffffff" />
        <Text className="text-white text-lg mt-4">
          Carregando fontes...
        </Text>
      </View>
      );
  }
  return (
    <View className="flex-1 justify-center items-center bg-blue-600">
      <ActivityIndicator size="large" color="#ffffff" />
      <Text className="text-white text-2xl font-bold mt-4">
        Bem-vindo!
      </Text>
    </View>
  );
}
