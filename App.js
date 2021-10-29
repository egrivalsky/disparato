import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.titleBar}>
        <Text style={styles.disparato}>
          [ d i s p a r a t o ]
        </Text>
      </View>
      <View style={styles.container}>
        <Button title="Headlines" style={styles.headlinebutton}></Button>
        <Button title="Manual"></Button>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBar: {
    width: '100%',
    marginTop: 50,
    justifyContent: 'center',
    backgroundColor: "lavender",
    alignItems: 'center',
  },
  disparato: {
    fontSize: 36
  },
  headlineButton: {
    height: '30%',
    maxHeight: '30%',
  }
});
