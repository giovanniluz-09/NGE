import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import { Home } from '../screens/home/home';


export default function Index() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontLoaded) {
      return null;
  }
  return (
    <Home/>
  );
}
