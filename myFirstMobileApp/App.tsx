import React from 'react';
import { View, StyleSheet } from 'react-native';
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
import Component3 from './src/components/Component3';
//Let's create a simple separator component that will only be used here in App.tsx
const Separator: React.FC = () => {
  return <View style={styles.separator}></View>
}
const App: React.FC = () => {

  return (
    <View style={styles.container}>
      <Component1 />
      <Separator />
      <Component2 />
      <Separator />
      <Component3 />
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
  separator: {
    backgroundColor: '#eee',
    height: 3,
    width: '100%'
  }
});
export default App;
