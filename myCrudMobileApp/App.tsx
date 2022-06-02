import 'reflect-metadata';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Connection } from 'typeorm';
import { TransactionEntry } from './src/entities/transaction-entry.entity';
const [defaultConnection, setConnection] = useState<Connection | null>(null);
const [transactionEntries, setTransactionEntries] = useState<TransactionEntry[]>([]);
const App: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 16, color: 'black' },
});
export default App;
