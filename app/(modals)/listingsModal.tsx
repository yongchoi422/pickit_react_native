import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from 'expo-router';

export default function ListingsModal() {
  const navigation = useNavigation();

  // 더미 데이터 생성
  const listings = Array(20).fill(null).map((_, index) => ({
    id: index + 1,
    sellerName: `User${index + 1}`,
    sellerProfilePic: 'https://via.placeholder.com/40',
    price: Math.floor(Math.random() * 1000) + 100,
    serial: `#${Math.floor(Math.random() * 1000)}`,
    isLowestPrice: index === 0, // 첫 번째 아이템을 최저가로 표시
  }));

  return (
    <View style={styles.modalOverlay}>
      {/* 반투명 배경 */}
      <TouchableOpacity style={styles.overlayTouchable} onPress={() => navigation.goBack()} />

      {/* 모달 컨텐츠 */}
      <View style={styles.modalContainer}>
        {/* 모달 헤더 */}
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>모든 리스팅 탐색</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.closeButton}>닫기</Text>
          </TouchableOpacity>
        </View>

        {/* 테이블 헤더 */}
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Seller</Text>
          <Text style={styles.tableHeaderText}>Price</Text>
          <Text style={styles.tableHeaderText}>Serial</Text>
        </View>

        {/* 리스트 */}
        <ScrollView>
          {listings.map((item) => (
            <View key={item.id} style={styles.tableRow}>
              {/* Seller */}
              <View style={styles.sellerContainer}>
                <Image source={{ uri: item.sellerProfilePic }} style={styles.sellerImage} />
                <Text style={styles.sellerName}>{item.sellerName}</Text>
              </View>

              {/* Price */}
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{item.price}</Text>
                {item.isLowestPrice && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>최저가</Text>
                  </View>
                )}
              </View>

              {/* Serial */}
              <View style={styles.serialContainer}>
                <Text style={styles.serialText}>{item.serial}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 검정 배경
    justifyContent: 'flex-end',
  },
  overlayTouchable: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: '#fff',
    height: '90%', // 화면 높이의 90%
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    width: '100%', // 화면 크기에 맞게 전체 너비를 사용
    maxWidth: 400, // 최대 너비를 400px로 제한
    alignSelf: 'center', // 가운데 정렬
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%', // 화면 너비에 맞추기
    maxWidth: 400,
    alignSelf: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 16,
    color: '#8854d0',
  },
  tableHeader: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f1',
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  sellerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  sellerName: {
    fontSize: 14,
  },
  priceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  priceText: {
    fontSize: 14,
  },
  badge: {
    backgroundColor: '#8854d0',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginTop: 5,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  serialContainer: {
    flex: 1,
    alignItems: 'center',
  },
  serialText: {
    fontSize: 14,
  },
});
