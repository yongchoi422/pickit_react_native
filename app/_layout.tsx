import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* 최상위에서 Tabs 레이아웃을 관리 */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        {/* 404 페이지 처리 */}
        <Stack.Screen name="+not-found" />

        {/* 프로필 관련 Stack */}
        <Stack.Screen name="profile/ownedCards" options={{ title: 'Owned Cards' }} />
      </Stack>
    </ThemeProvider>
  );
}
