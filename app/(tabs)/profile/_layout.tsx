// app/(tabs)/profile/_layout.tsx
import { Stack } from 'expo-router';

export default function ProfileStack() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false, // 프로필 메인 화면에서는 헤더 숨김
          title: 'Profile', // 제목 설정
          headerBackTitle: 'Back', // iOS에서 뒤로 가기 버튼 레이블 설정 (원하는 경우)
        }}
      />
      <Stack.Screen
        name="ownedCards"
        options={{ title: 'Owned Cards' }}
      />
      <Stack.Screen
        name="[id]"
        options={{ title: 'Card Detail' }}
      />

    </Stack>
  );
}
