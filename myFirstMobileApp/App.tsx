import React from 'react';
import { View, StyleSheet } from 'react-native';
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Component1 />
      <Component2 />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default App;
