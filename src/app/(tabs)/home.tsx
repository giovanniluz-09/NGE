import WelcomeCard from '@/src/components/WelcomeCard';
import { View } from 'react-native';
// import ProfilePhoto from '../../../assets/images/profile_photo.png';

export default function Home(){

    {/* Dados do usuário (posteriormente deverá ser coletado diretamente do banco de dados) */}
    
    const userData = {
        name: "Ricardo Santos",
        image: require('../../../assets/images/profile_photo.png'),
        balance: '1.000'
    }

    return(
        
    <View className="bg-secondary w-full h-full">
        <WelcomeCard
            userName={userData.name}
            userImage={userData.image}
            currentBalance={userData.balance}            
        />
    </View>
    )}


 