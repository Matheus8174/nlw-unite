import { Feather } from '@expo/vector-icons';

import {
  Image,
  View,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native';

import BandImg from '@/assets/ticket/band.png';
import HeaderImg from '@/assets/ticket/header.png';

import QRCode from '@/components/qrcode';

import { colors } from '@/styles/colors';

type CredentialsProps = {
  image: string;
  onChangeAvatar?: () => void;
  onExpandQRCode?: () => void;
}

function Credential({ onChangeAvatar, onExpandQRCode, image }: CredentialsProps) {
  return (
    <View className="w-full self-stretch items-center">
      <Image
        src={BandImg}
        className='w-24 h-52 z-10'
      />

      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">
        <ImageBackground
          source={HeaderImg}
          className='px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden'
        >
          <View className='w-full flex-row items-center justify-between'>
            <Text className='text-zinc-50 text-sm font-bold'>Unite summit</Text>

            <Text className='text-zinc-50 text-sm font-bold'>#123453454</Text>
          </View>

          <View className='w-40 h-40 bg-black rounded-full' />
        </ImageBackground>

        {image ? (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={onChangeAvatar}
          >
            <Image
              source={{ uri: image }}
              className='w-36 h-36 rounded-full -mt-24'
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.9}
            className='w-36 h-36 rounded-full -mt-24 bg-gray-400 items-center justify-center'
            onPress={onChangeAvatar}
          >
            <Feather name="camera" color={colors.green[400]} size={32} />
          </TouchableOpacity>
        )}

        <Text className='font-bold text-2xl text-zinc-50 mt-4'>
          Matheus Santos
        </Text>

        <Text className='font-regular text-base text-zinc-300 mb-4'>
          matheus12@gmail.com
        </Text>

        <QRCode size={120} value='test' />

        <TouchableOpacity
          activeOpacity={0.7}
          className='mt-6'
          onPress={onExpandQRCode}
        >
          <Text className='text-orange-500 text-sm'>Ampliar QRcode</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Credential;
