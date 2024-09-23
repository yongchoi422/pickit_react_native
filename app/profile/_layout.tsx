import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}> 
      {/* profile/ownedCards 페이지 */}
      <Stack.Screen name="ownedCards" options={{ title: 'Owned Cards' }} />
      
      {/* profile/[id] 페이지 (동적 경로 처리) */}
      <Stack.Screen name="[id]" options={{ title: 'Card Detail' }} />
    </Stack>
  );
}
