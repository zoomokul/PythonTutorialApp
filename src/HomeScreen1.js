import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const loadChapter = (chapterNumber) => {
    // Define the path to the external HTML file for the chapter
    const chapterPath = `../src/chapters/chapter${chapterNumber}.html`;

    // Fetch the content from the external HTML file
    fetch(chapterPath, {
        headers: {
          'Content-Type': 'text/html',
        }})
      .then((response) => response.text())
      .then((htmlContent) => {
        // Navigate to the Chapter screen with the loaded HTML content
        navigation.navigate('Chapter', { chapterContent: htmlContent });
      })
      .catch((error) => {
        console.error('Error loading chapter:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Chapter 1" onPress={() => loadChapter(1)} />
      <Button title="Chapter 2" onPress={() => loadChapter(2)} />
      <Button title="Chapter 3" onPress={() => loadChapter(3)} />
      {/* Add buttons for other chapters by calling loadChapter with the corresponding chapter number */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
