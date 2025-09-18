import React, { useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const WelcomeCard = ({ 
  userName = "Ricardo Santos", 
  userImage = "https://via.placeholder.com/60x60/CCCCCC/FFFFFF?text=RS",
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

//   const handleCardPress = (cardType) => {
//     onCardPress(cardType);
//   };

  const renderBalanceDisplay = () => {
    if (showBalance) {
      return (
        <TouchableOpacity 
          onPress={() => setShowBalance(false)}
          className="flex-row items-center"
        >
          <Text className="text-white text-2xl font-bold mr-3">
            {currentBalance}
          </Text>
          <Text className="text-white text-xs">👁</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity 
        onPress={() => setShowBalance(true)}
        className="flex-row items-center"
      >
        {balanceCircles.map((_, index) => (
          <View
            key={index}
            className="w-3 h-3 bg-white rounded-full mr-2"
          />
        ))}
        <View className="ml-2 w-6 h-6 border border-white rounded-full items-center justify-center">
          <Text className="text-white text-xs">👁</Text>
        </View>
      </TouchableOpacity>
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
    <View className="px-5">
      <View className="bg-blue-700 rounded-3xl p-6 shadow-lg">
        
        {/* Header com foto e nome */}
        <View className="flex-row items-center mb-8">
          <Image
            source={{ uri: userImage }}
            className="w-15 h-15 rounded-full mr-4 border-2"
            style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
          />
          <View className="flex-1">
            <Text className="text-white/80 text-base font-normal">
              Bem vindo,
            </Text>
            <Text className="text-white text-xl font-semibold mt-0.5">
              {userName}
            </Text>
          </View>
        </View>

        {/* Seção do saldo */}
        <View className="mb-8">
          <Text className="text-white/80 text-sm mb-3">
            Saldo atual
          </Text>
          {renderBalanceDisplay()}
        </View>

        {/* Ícones dos cartões */}
        <View className="flex-row justify-between">
          {cardIcons.map((card) => (
            <TouchableOpacity
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
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default WelcomeCard;