import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity, 
  
} from 'react-native';
import { Link } from 'expo-router'; // Link 추가

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* 상단 포인트 및 아이콘 */}
        <View style={styles.topContainer}>
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsIcon}>ⓒ</Text>
            <Text style={styles.pointsText}>1200</Text>
          </View>
          <Image
            style={styles.settingsIcon}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/126/126472.png' }}
          />
        </View>

        {/* 프로필 사진, ID 및 메시지 */}
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://example.com/profile-picture.png' }} // 프로필 사진 URL
          />
          <Text style={styles.profileId}>ID XXXX</Text>
          <Text style={styles.welcomeMessage}>
            Welcome to PICKIT, Tell us about you!
          </Text>
        </View>

        {/* 친구 초대 버튼 */}
        <View style={styles.inviteButton}>
          <Text style={styles.inviteButtonText}>친구 초대하기</Text>
        </View>

     {/* 보유 카드 정보 */}
     <View style={styles.cardInfoContainer}>
          <Text style={styles.sectionTitle}>보유 카드</Text>

          {/* 보유 카드 버튼을 눌렀을 때 ownedCards 페이지로 이동 */}
          <Link href="/profile/ownedCards" asChild>
            <TouchableOpacity activeOpacity={0.7}>
              <ImageBackground
                style={styles.cardBox}
                source={{ uri: 'https://example.com/card-background.png' }} // 실제 이미지 URL로 변경
                resizeMode="cover"
              >
                <View style={styles.cardType}>
                  <Text style={styles.customCardText}>노말</Text>
                  <Text style={styles.cardCountText}>110</Text>
                </View>
                <View style={styles.cardType}>
                  <Text style={styles.customCardText}>유니크</Text>
                  <Text style={styles.cardCountText}>10</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </Link>
        </View>

        {/* 판매 내역 */}
        <View style={styles.salesInfoContainer}>
          <Text style={styles.sectionTitle}>판매 내역</Text>
          <View style={styles.salesDetails}>
            {/* 판매중 레이어 */}
            <View style={styles.salesBox}>
              <View style={styles.centerContent}>
                <Text style={styles.customCardText}>판매중</Text>
                <Text style={styles.cardCountText}>2</Text>
              </View>
            </View>

            {/* 판매완료 레이어 */}
            <View style={styles.salesBox}>
              <View style={styles.centerContent}>
                <Text style={styles.customCardText}>판매완료</Text>
                <Text style={styles.cardCountText}>15</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsIcon: {
    fontSize: 20,
    marginRight: 5,
  },
  pointsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsIcon: {
    width: 25,
    height: 25,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#d4bfff',
  },
  profileId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  welcomeMessage: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
    textAlign: 'center',
  },
  inviteButton: {
    backgroundColor: '#e6e6fa',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignSelf: 'center',
    marginVertical: 20,
  },
  inviteButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6a0dad',
  },
  cardInfoContainer: {
    marginHorizontal: 20,
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20, // 이 부분을 추가하여 간격을 늘립니다.
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardBox: {
    width: '100%',
    height: 72,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardType: {
    alignItems: 'center',
  },
  customCardText: {
    width: 56,
    height: 17,
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16.8,
    color: '#3d3d3d',
    letterSpacing: 0.18,
    textAlign: 'center',
  },
  cardCountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  salesInfoContainer: {
    marginHorizontal: 20,
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  salesDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salesBox: {
    width: '48%',
    height: 72,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
