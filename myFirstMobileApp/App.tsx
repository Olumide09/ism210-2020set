import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olumide Olaoye is the Greatest Of All Time!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'blue',
    padding: 6,
    alignItems: 'center'
  }
});
export default App;
