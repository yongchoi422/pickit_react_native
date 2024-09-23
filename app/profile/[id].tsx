import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CardDetail() {
  const { id } = useLocalSearchParams(); // URL에서 동적으로 넘어온 id를 가져옵니다.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>카드 상세 정보</Text>
      <Text style={styles.cardInfo}>선택한 카드 ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20,
  },
  cardInfo: { 
    fontSize: 18, 
    marginVertical: 10,
  },
});
