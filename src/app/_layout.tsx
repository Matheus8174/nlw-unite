import '@/styles/global.css';

import type React from 'react';

import { Slot } from 'expo-router';

import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import Loading from '@/components/loading';

function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_700Bold
  })

  if(!fontsLoaded) return <Loading />;

  return <Slot />
};

export default Layout;
