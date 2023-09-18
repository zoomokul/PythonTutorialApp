import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import HTML from 'react-native-render-html';

const ChapterScreen = ({ route }) => {
  const { chapterContent } = route.params;

  return (
    <View style={styles.container}>
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
