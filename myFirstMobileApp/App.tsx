import React from 'react';
import { View, StyleSheet } from 'react-native';
import Component1 from './src/components/Component1';
const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Component1 />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default App;
