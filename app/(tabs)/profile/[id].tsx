import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';

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

  // 더미 데이터: 최근 거래 내역
  const transactionHistory = [
    { serial: '#614', price: 79, date: '09/24', highest: false, lowest: false },
    { serial: '#551', price: 9500, date: '09/19', highest: true, lowest: false },
    { serial: '#535', price: 30, date: '09/14', highest: false, lowest: false },
    { serial: '#301', price: 30, date: '09/14', highest: false, lowest: false },
    { serial: '#382', price: 30, date: '09/10', highest: false, lowest: false },
    { serial: '#503', price: 40, date: '09/09', highest: false, lowest: false },
    { serial: '#381', price: 50, date: '09/09', highest: false, lowest: false },
    { serial: '#380', price: 50, date: '09/09', highest: false, lowest: false },
    { serial: '#374', price: 20, date: '09/03', highest: false, lowest: true },
  ];

  // 더미 데이터: For You 추천 카드
  const recommendedCards = Array(10)
    .fill(null)
    .map((_, index) => ({
      id: `${index + 1}`,
      image: 'https://via.placeholder.com/120x180', // 카드 이미지 URL
      title: `Card Title ${index + 1}`,
      onSaleCount: Math.floor(Math.random() * 10) + 1, // 1~10장의 카드 거래중
      lowestPrice: Math.floor(Math.random() * 500) + 100, // 100~600 사이의 최저가
    }));

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* 카드 이미지 */}
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => console.log('카드 이미지 터치됨')}
        >
          <View style={styles.cardBackground}>
            <Image source={{ uri: cardData.image }} style={styles.cardImage} />
          </View>
        </TouchableOpacity>

        <View style={styles.detailContainer}>
          {/* 카드 정보 */}
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.cardTitle}>{cardData.title}</Text>
              <Text style={styles.ownerText}>소유자 {cardData.owner}</Text>
            </View>

            {/* 프로필 이미지 */}
            <TouchableOpacity onPress={() => console.log('프로필 이미지 터치됨')}>
              <Image
                source={{ uri: cardData.ownerProfilePic }}
                style={styles.ownerProfilePic}
              />
            </TouchableOpacity>
          </View>

        {/* 모든 리스팅 탐색 버튼 */}
        <Link href="/listingsModal" asChild>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreText}>모든 리스팅 탐색</Text>
          </TouchableOpacity>
        </Link>

          {/* 판매 중 버튼 */}
          {cardData.onSale && (
            <TouchableOpacity style={styles.onSaleButton}>
              <Text style={styles.onSaleText}>판매 중</Text>
            </TouchableOpacity>
          )}

          {/* 추가 정보 */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>에디션 사이즈: {cardData.editionSize}</Text>
            <Text style={styles.infoText}>시리얼 번호: {cardData.serialNumber}</Text>
          </View>

          {/* 최근 거래가 */}
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>최근 거래가</Text>
            <View style={styles.priceValueContainer}>
              <Text style={styles.priceValue}>79</Text>
              <View style={styles.priceChange}>
                <Text style={styles.priceChangeText}>+59 (+295%)</Text>
                <Text style={styles.priceChangeIcon}>▲</Text>
              </View>
            </View>
          </View>

          {/* 최근 거래 내역 */}
          <View style={styles.historyContainer}>
            <Text style={styles.historyTitle}>최근 거래 내역</Text>

            {/* 제목 행 */}
            <View style={styles.historyHeader}>
              <Text style={styles.historyHeaderText}>시리얼</Text>
              <Text style={styles.historyHeaderText}>가격</Text>
              <Text style={styles.historyHeaderText}>날짜</Text>
            </View>

            <View style={styles.historyTable}>
              {transactionHistory.map((item, index) => (
                <View key={index} style={styles.historyRow}>
                  <Text style={styles.historyText}>{item.serial}</Text>
                  <Text style={styles.historyText}>
                    {item.price}
                    {item.highest && <Text style={styles.highestBadge}> 최고가</Text>}
                    {item.lowest && <Text style={styles.lowestBadge}> 최저가</Text>}
                  </Text>
                  <Text style={styles.historyText}>{item.date}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* For you 추천 카드 섹션 */}
          <View style={styles.recommendedContainer}>
            <Text style={styles.recommendedTitle}>For you 추천 카드</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {recommendedCards.map((card) => (
                <View key={card.id} style={styles.cardItem}>
                  <Image source={{ uri: card.image }} style={styles.cardItemImage} />
                  <Text style={styles.cardItemTitle}>{card.title}</Text>
                  <Text style={styles.cardItemSubText}>
                    {`${card.onSaleCount}장 카드 거래중`}
                  </Text>
                  <View style={styles.priceBadge}>
                    <Text style={styles.priceBadgeText}>
                      {`${card.lowestPrice} 최저가`}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
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
    width: '90%', // 카드 이미지를 부모 컨테이너 내에서 90%로 설정
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
  priceContainer: {
    marginTop: 20,
  },
  priceLabel: {
    fontSize: 14, // 텍스트 크기 작게 조정
    color: '#6c757d',
    marginBottom: 5,
  },
  priceValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  priceChange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceChangeText: {
    fontSize: 14,
    color: 'red',
    marginRight: 5,
  },
  priceChangeIcon: {
    fontSize: 14,
    color: 'red',
  },
  historyContainer: {
    marginTop: 20,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  historyHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  historyTable: {
    width: '100%',
  },
  historyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  historyText: {
    fontSize: 14,
  },
  highestBadge: {
    backgroundColor: '#8854d0',
    color: '#fff',
    borderRadius: 3,
    padding: 2,
    paddingHorizontal: 4,
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  lowestBadge: {
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: 3,
    padding: 2,
    paddingHorizontal: 4,
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  recommendedContainer: {
    marginTop: 20,
  },
  recommendedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardItem: {
    width: 120,
    marginRight: 10,
  },
  cardItemImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  cardItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardItemSubText: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 2,
  },
  priceBadge: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  priceBadgeText: {
    fontSize: 12,
    color: '#000',
  },
  bidButton: {
    backgroundColor: '#8854d0', // 보라색 버튼
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20, // 상단 여백 추가
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
