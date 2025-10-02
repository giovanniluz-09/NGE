import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  Pressable,
  Text,
  View
} from 'react-native';

interface WelcomeCardProps {
  userName?: string;
  userImage?: any;
  currentBalance?: string;
  showBalanceInitial?: boolean;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ 
  userName = "Ricardo Santos", 
  userImage,
  currentBalance = "R$ 2.450,00",
  showBalanceInitial = false
}) => {
  const [showBalance, setShowBalance] = useState(showBalanceInitial);

  const cardIcons = [
    { id: 1, type: 'credit', label: 'Crédito' },
    { id: 2, type: 'debit', label: 'Débito' },
    { id: 3, type: 'virtual', label: 'Virtual' },
    { id: 4, type: 'business', label: 'Empresarial' },
  ];

  const balanceCircles = Array(5).fill(0);

  // const handleCardPress = (cardType) => {
  //   onCardPress(cardType);
  // };

  const renderBalanceDisplay = () => {
    if (showBalance) {
      return (
        <Pressable 
          onPress={() => setShowBalance(false)}
          className="flex-row items-center"
        >
          <Text className="text-white text-2xl font-bold mr-3 font-poppins">
            {currentBalance}
          </Text>
          <Ionicons name="eye" size={23} color="white"/>
        </Pressable>
      );
    }

    return (
      <Pressable
        onPress={() => setShowBalance(true)}
        className="flex-row items-center"
      >
        {balanceCircles.map((_, index) => (
          <View
            key={index}
            className="w-3 h-3 bg-white rounded-full mr-2"
          />
        ))}
        <View className="ml-2 w-6 h-6 items-center justify-center">
          <Ionicons name="eye-off" size={23} color="white"/>
        </View>
      </Pressable>
    );
  };

  const renderCardIcon = () => {
    return (
      <View className="w-8 h-6 justify-between">
        <View className="h-0.5 bg-white rounded-full w-full" />
        <View className="h-0.5 bg-white rounded-full w-3/5" />
      </View>
    );
  };

  return (
    <View className="h-full">
      <View className="bg-primary rounded-b-3xl p-6 shadow-lg ">
        
        {/* Header com foto e nome */}
        <View className="flex-row items-center mb-8">
          <Image
            source={userImage}
            className=" w-24 h-24 rounded-full mr-4 border-2 mt-6 "
            style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
          />
          <View className="flex-1">
            <Text className="text-white/80 text-base font-normal font-poppins">
              Bem vindo,
            </Text>
            <Text className="text-white text-xl font-semibold mt-0.5 font-poppins">
              {userName}
            </Text>
          </View>
        </View>

        {/* Seção do saldo */}
        <View className="mb-8">
          <Text className="text-white/80 text-sm mb-3 font-poppins">
            Saldo atual
          </Text>
          {renderBalanceDisplay()}
        </View>

        {/* Ícones dos cartões */}
        <View className="flex-row justify-between">
          {cardIcons.map((card) => (
            <Pressable
              key={card.id}
              className="w-16 h-12 rounded-xl items-center justify-center border"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
            //   activeOpacity={0.8}
            //   onPress={() => handleCardPress(card.type)}
            >
              {renderCardIcon()}
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export default WelcomeCard;