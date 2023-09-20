import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import HTML from 'react-native-render-html';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/1714353642';

const ChapterScreen = ({ route }) => {
  const { chapterContent } = route.params;

  return (
    <View style={styles.container}>
          <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
        <ScrollView>
        <HTML source={{ html: chapterContent }} />

        </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ChapterScreen;
