import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import Manual from './screens/Manual';
import Start from './screens/Start';
import FoundWords from './screens/FoundWords';
import Test from './components/Test'


export default function App(props) {

  // let [ selectionMade, setSelectionMade ] = useState(0);
  // setSelectionMade = ()=> {
  //   if (selectionMade == 0) {
  //     selectionMade = 1
  //   } else {
  //     selectionMade = 0
  //   }
  // }
  // let x = selectionMade;
  // let content = <Start />;
  // if (x == 1) {
  //   content = <FoundWords />
  // }
  return (
    <View style={styles.screen}>
      <Start />
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})



