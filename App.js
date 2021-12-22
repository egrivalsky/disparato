import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import Manual from './screens/Manual';
import Start from './screens/Start';
import FoundWords from './screens/FoundWords';
import Test from './components/Test'


export default function App(props) {

  const onGoHandler = ()=> { setScreenShown(wordsScreen) }
  const goBackHandler = ()=> {setScreenShown(startScreen)}
  let startScreen = <Start onPressHandler={onGoHandler}/>
  let wordsScreen = <FoundWords onPressHandler={goBackHandler}/>
  let [ screenShown, setScreenShown ] = useState(startScreen)


  return (
    <View style={styles.screen}>
      {screenShown}
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

