import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import Manual from './screens/Manual';
import Start from './screens/Start';
import FoundWords from './screens/FoundWords';
import Test from './components/Test'


export default function App(props) {

  // let [ screenShown, setScreenShown ] = useState(startScreen);
  let [ firstWord, setFirstWord ] = useState('');
  let [ wordTwo, setWordTwo ] = useState('');
  let wordsArray = [];

  const onGoHandler = (selectedWordOne, selectedWordTwo)=> { 
    setFirstWord(selectedWordOne); 
    setWordTwo(selectedWordTwo);
    wordsArray = [firstWord, 'onion', wordTwo, 'spaghetti']};

  const goBackHandler = ()=> {
    setFirstWord(''); 
    setWordTwo(''); }

  let startScreen = <Start onPressHandler={onGoHandler}/>
  let wordsScreen = <FoundWords onPressHandler={goBackHandler}
  w1={firstWord} 
  w2={wordTwo}
  allWords={wordsArray} />;

  let content = startScreen;

  if (firstWord != '' && wordTwo != '') {
    content = wordsScreen;
  }

  console.log('Word One: ' + firstWord + ' Word Two: ' + wordTwo)

  return (
    <View style={styles.screen}>
      {content}
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

