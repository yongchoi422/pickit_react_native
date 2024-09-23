import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function OwnedCards() {
  const cards = [
    { id: 1, name: '노말 카드', quantity: 110 },
    { id: 2, name: '유니크 카드', quantity: 10 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>보유 카드</Text>
      {cards.map((card) => (
        <Link
          key={card.id}
          href={{ pathname: `/profile/[id]`, params: { id: card.id.toString() } }} // 경로 수정
          asChild
        >
          <TouchableOpacity style={styles.card}>
            <View>
              <Text style={styles.cardName}>{card.name}</Text>
              <Text style={styles.cardQuantity}>보유 수량: {card.quantity}</Text>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
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
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardName: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  cardQuantity: { 
    fontSize: 16, 
    color: '#666' 
  },
});
