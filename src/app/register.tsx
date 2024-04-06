import React from 'react';

import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { View, Image, StatusBar, Alert } from 'react-native';
import { Link, router } from 'expo-router';

import Input from '@/components/input';
import Button from '@/components/button';

import Logo from '@/assets/logo.png';
import { colors } from '@/styles/colors';

type keyofObj<T> = keyof T

function keysTyped<T extends object>(arg: T): (keyof T)[] {
  // @ts-expect-error
  return Object.keys(arg);
}

function Register() {
  const [registerData, setRegisterData] = React.useState({
    name: '',
    email: ''
  });

  const updateRegisterData = (field: keyofObj<typeof registerData>, data: string) =>
    setRegisterData((prev) => ({ ...prev, [field]: data }));

  function handleRegister() {
    const isAnyFieldEmpty =
      keysTyped(registerData).
      find((key) => !registerData[key].trim());

    if(isAnyFieldEmpty) return
      Alert.alert('Inscrição', 'Preencha todos os campos');

    router.push('/ticket');
  }

  return (
    <View className="flex-1 p-8 bg-green-500 items-center justify-center">
      <StatusBar barStyle='light-content' />

      <Image source={Logo} className='h-16' resizeMode='contain' />

      <View className='w-full mt-12 gap-3'>
        <Input>
          <FontAwesome6
            name="user-circle"
            size={20}
            color={colors.green[200]}
          />

          <Input.Field
            placeholder='Nome completo'
            onChangeText={(text) => updateRegisterData('name', text)}
          />
        </Input>

        <Input>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={colors.green[200]}
          />

          <Input.Field
            placeholder='E-mail'
            keyboardType='email-address'
            onChangeText={(text) => updateRegisterData('email', text)}
          />
        </Input>

        <Button text='Realizar inscrição' onPress={handleRegister} />

        <Link
          href="/"
          className='text-gray-100 text-base font-bold text-center mt-8'
        >
          Já possui ingresso?
        </Link>
      </View>
    </View>
  )
}

export default Register;
