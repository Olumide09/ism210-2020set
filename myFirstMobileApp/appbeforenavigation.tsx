import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Image, SafeAreaView, Platform } from 'react-native';
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
import Component3 from './src/components/Component3';
import Component5 from './src/components/Component5';
import Component6 from './src/components/Component6';
import Component7 from './src/components/Component7';
import Component9 from './src/components/Component9';
import { GestureHandlerRefContext } from '@react-navigation/stack';
//import Component8 from './src/components/Component8';
//Let's create a simple separator component that will only be used here in App.tsx
const Separator: React.FC = () => {
  return <View style={styles.separator}></View>
}
const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.screenHeader}>
            <Image style={styles.logo}
              source={require('./src/img/PAU-Logo-Website.png')}
            />
          </View>
          <View style={styles.screenBody}>
            <Component1 />
            <Separator />
            <Component2 />
            <Component2 />
            <Separator />
            <Separator />
            <Component5 />
            <Separator />
            <Component6 />
            <Separator />
            <Component7 />
            <Component9 />
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 15
  },
  separator: {
    backgroundColor: '#eee',
    height: 3,
    width: '100%'
  },
  screenHeader: {
    flex: 1,
    paddingTop: 27,
    justifyContent: 'center',
    backgroundColor: 'darkblue'
  },
  screenBody: {
    flex: 6,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 82
  }
});
//export default App;
