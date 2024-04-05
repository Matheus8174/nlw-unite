import React from 'react';

import { TextInput, View, TextInputProps } from 'react-native';
import { colors } from '@/styles/colors';

function Input({ children }: React.PropsWithChildren) {
  return (
    <View className="w-full h-14 flex-row items-center gap-3 p-3 border border-green-400 rounded-lg">
      {children}
    </View>
  )
}

function Field(props: TextInputProps) {
  return <TextInput placeholderTextColor={colors.gray[200]} className="flex-1 text-white text-base font-regular" {...props} />
}

Input.Field = Field

export default Input;
