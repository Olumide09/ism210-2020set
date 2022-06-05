import 'reflect-metadata';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
const App: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ED386',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 16, color: 'black' },
});
export default App;
