import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from './src/cmoponents/AppBar';
import MemoList from './src/cmoponents/MemoList';
import CircleButton from './src/cmoponents/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />

      <MemoList />

      <CircleButton>+</CircleButton>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },

});
