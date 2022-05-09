import React from 'react';
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
import Component3 from './src/components/Component3';
import Component5 from './src/components/Component5';
import Component6 from './src/components/Component6';
//Let's create a simple separator component that will only be used here in App.tsx
const Separator: React.FC = () => {
  return <View style={styles.separator}></View>
}
const App: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <Component1 />
      <Separator />
      <Component2 />
      <Separator />
      <Component3 />
      <Separator />
      <Component5 />
      <Separator />
      <Component6 />
      </ScrollView>
      </SafeAreaView>
     
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
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
