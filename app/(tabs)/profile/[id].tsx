import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router'; // Link를 통해 다른 페이지로 이동하도록 추가

export default function CardDetail() {
  const { id } = useLocalSearchParams(); // URL에서 동적으로 넘어온 id를 가져옵니다.

  // 표시할 카드의 더미 데이터입니다.
  const cardData = {
    title: 'CHUNG HA S1_07',
    owner: 'YONGCHOI',
    ownerProfilePic: 'https://via.placeholder.com/50', // 프로필 이미지 URL
    image: 'https://via.placeholder.com/150', // 카드 이미지 URL
    editionSize: '1,250',
    serialNumber: '#123456',
    onSale: true,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* 카드 이미지 터치 가능하게 수정 */}
        <TouchableOpacity style={styles.imageContainer} onPress={() => console.log('카드 이미지 터치됨')}>
          <View style={styles.cardBackground}>
            <Image source={{ uri: cardData.image }} style={styles.cardImage} />
          </View>
        </TouchableOpacity>

        <View style={styles.detailContainer}>
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.cardTitle}>{cardData.title}</Text>
              <Text style={styles.ownerText}>소유자 {cardData.owner}</Text>
            </View>

            {/* 프로필 이미지 터치 가능하게 수정 */}
            <TouchableOpacity onPress={() => console.log('프로필 이미지 터치됨')}>
              <Image source={{ uri: cardData.ownerProfilePic }} style={styles.ownerProfilePic} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreText}>모든 리스팅 탐색</Text>
          </TouchableOpacity>

          {cardData.onSale && (
            <TouchableOpacity style={styles.onSaleButton}>
              <Text style={styles.onSaleText}>판매 중</Text>
            </TouchableOpacity>
          )}

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>에디션 사이즈: {cardData.editionSize}</Text>
            <Text style={styles.infoText}>시리얼 번호: {cardData.serialNumber}</Text>
          </View>
        </View>
      </ScrollView>

      {/* 하단 고정된 판매하기 버튼 */}
      <TouchableOpacity style={styles.bidButton}>
        <Text style={styles.bidText}>판매하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f1',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 10,
    alignItems: 'center', // 중앙 정렬
  },
  imageContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 400, // 이미지 부분에도 최대 너비 적용
  },
  cardBackground: {
    width: '50%',
    height: '100%',
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: '90%',  // 카드 이미지를 부모 컨테이너 내에서 90%로 설정
    height: '90%',
    resizeMode: 'cover',
  },
  detailContainer: {
    paddingHorizontal: 20,
    width: '100%',
    maxWidth: 400, // 최대 너비 설정
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    maxWidth: 400, // 전체 레이아웃에 최대 너비를 적용
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ownerText: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 4,
  },
  ownerProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  exploreButton: {
    backgroundColor: '#e6e6fa',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  exploreText: {
    color: '#8854d0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  onSaleButton: {
    backgroundColor: '#20bf6b',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  onSaleText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 5,
  },
  bidButton: {
    backgroundColor: '#8854d0', // 보라색 버튼
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
    maxWidth: 400, // 보라색 버튼에도 최대 너비 적용
    alignSelf: 'center', // 중앙 정렬
  },
  bidText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
