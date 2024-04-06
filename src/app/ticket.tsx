import React from 'react';

import { FontAwesome } from '@expo/vector-icons';

import {
  Text,
  View,
  Modal,
  Alert,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import Header from '@/components/header';
import Button from '@/components/button';
import Credential from '@/components/creadential';

import { colors } from '@/styles/colors';
import QRCode from '@/components/qrcode';

function Ticket() {
  const [image, setImage ] = React.useState('');

  const [expandQRCode, setExpandQRCode] = React.useState(false);

  async function handleSelectImage() {
    try {
      const { assets } = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4]
      });

      if(assets) setImage(assets[0].uri);
    } catch(err) {
      Alert.alert('Foto', 'Não foi possivel selecionar a image')
    }
  }

  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle='light-content'/>
      <Header title="Minha credencial"/>

      <ScrollView
        className='-mt-28 -z-10'
        contentContainerClassName='px-8 pb-8'
        showsVerticalScrollIndicator={false}
      >
        <Credential
          image={image}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={() => setExpandQRCode(true)}
        />

        <FontAwesome
          size={24}
          name="angle-double-down"
          color={colors.gray[300]}
          className='self-center my-6'
        />

        <Text className='text-white font-bold text-2xl mt-4'>
          Compartilhar credencial
        </Text>

        <Text className='text-white font-regular text-base mt-1 mb-6'>
          Mostre ao mundo que você vai participar do Unite Summit!
        </Text>

        <Button text='Compartilhar' />

        <TouchableOpacity
          activeOpacity={0.7}
          className='mt-10'
        >
          <Text className='text-base text-white font-bold text-center'>
            Remover Ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={expandQRCode} statusBarTranslucent animationType='fade'>
        <View className='flex-1 bg-green-500 items-center justify-center'>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setExpandQRCode(false)}
          >
            <QRCode value='teste' size={300} />

            <Text className='text-orange-500 text-sm text-center mt-10'>
              Fechar QRCode
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default Ticket;
