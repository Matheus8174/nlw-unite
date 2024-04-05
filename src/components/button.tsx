import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  isLoading?: boolean;
}

function Button({ text, isLoading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      className='w-full h-14 bg-orange-500 justify-center items-center rounded-lg'
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text className='text-base text-green-500 font-bold uppercase'>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default Button;
