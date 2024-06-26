import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Image, StatusBar, Alert } from 'react-native';
import { Link } from 'expo-router';

import Input from '@/components/input';
import Button from '@/components/button';

import Logo from '@/assets/logo.png';
import { colors } from '@/styles/colors';

function Home() {
  const codeRef = React.useRef('');

  function handleAcessCredential() {
    if(!codeRef.current.trim()) return
      Alert.alert('Ingresso', 'Informe o código do ingresso');
  }

  return (
    <View className="flex-1 p-8 bg-green-500 items-center justify-center">
      <StatusBar barStyle='light-content' />

      <Image source={Logo} className='h-16' resizeMode='contain' />

      <View className='w-full mt-12 gap-3 '>
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />

          <Input.Field
            placeholder='Código do ingresso'
            onChangeText={(text) => codeRef.current = text}
          />
        </Input>

        <Button text='Acessar credencial' onPress={handleAcessCredential} />

        <Link
          href="/register"
          className='text-gray-100 text-base font-bold text-center mt-8'
        >
          Ainda não possui ingresso? {codeRef.current}
        </Link>
      </View>
    </View>
  )
}

export default Home;
