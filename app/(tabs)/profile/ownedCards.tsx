import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Link } from 'expo-router';

export default function OwnedCards() {
  const cardGroups = [
    { id: 1, title: 'CHUNG HA S1', cards: Array(10).fill(null).map((_, idx) => ({ id: `s1-${idx}`, image: 'https://via.placeholder.com/150' })) },
    { id: 2, title: 'CHUNG HA S2', cards: Array(10).fill(null).map((_, idx) => ({ id: `s2-${idx}`, image: 'https://via.placeholder.com/150' })) },
  ];

  const categories = ['All', 'CHUNG HA', 'Lovelyz', 'Verivery', 'G-IDLE', 'Red Velvet', 'Twice', 'Blackpink', 'BTS', 'Exo'];

  // Calculate the total number of cards
  const totalCards = cardGroups.reduce((sum, group) => sum + group.cards.length, 0);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>총 {totalCards}장</Text>
        <FlatList
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {cardGroups.map(group => (
        <View key={group.id} style={styles.groupContainer}>
          <Text style={styles.groupTitle}>{group.title}</Text>
          <View style={styles.cardContainer}>
            {group.cards.map(card => (
              <Link key={card.id} href={`/profile/${card.id}`} asChild>
                <TouchableOpacity style={styles.card}>
                  <Image source={{ uri: card.image }} style={styles.image} />
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    maxWidth: 400, // Set maximum width for the entire ScrollView
    alignSelf: 'center', // Center the ScrollView
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
  },
  groupContainer: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: 100,
    height: 150,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
