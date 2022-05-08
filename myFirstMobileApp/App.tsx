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
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#95c980',
    fontSize: 20,
    backgroundColor: 'white',
    padding: 6,
    alignItems: 'center'
  }
});
export default App;
