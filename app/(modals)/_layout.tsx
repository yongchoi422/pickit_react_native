import { Stack } from 'expo-router';

export default function ModalsLayout() {
  return (
    <Stack
      screenOptions={{
        presentation: 'transparentModal', // 모달이 투명한 스타일로 표시됨
        headerShown: false, // 모달 헤더 숨기기
      }}
    >
      <Stack.Screen name="listingsModal" />
    </Stack>
  );
}
