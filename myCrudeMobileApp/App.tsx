import 'reflect-metadata';
import React, { useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { TransactionEntry } from './src/entities/transaction-entry.entity';
import { Connection } from 'typeorm/connection/Connection';
import { createConnection } from 'typeorm';

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

const setupConnection = useCallback(async () => {
  try {
    const connection = await createConnection({
      /* Use below if not using expo
      type: 'react-native',
      database: 'transaction_entries.db',
      location: 'default',
      */
      type: 'expo',
      database: 'transaction_entries.db',
      driver: require('expo-sqlite'),
      //logging: ['error', 'query', 'schema'],
      synchronize: true,
      entities: [TransactionEntry],
    });
    setConnection(connection);
    getTransactionEntries(setTransactionEntries);
  } catch (error) {
    console.log(error);
  }
}, []);
export default App;
