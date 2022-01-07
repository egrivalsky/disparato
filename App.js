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
  let [firstDegreeWords, setFirstDegreeWords] = useState([])
  let [wordOneList, setWordOneList] = useState([]);
  let [wordTwoList, setWordTwoList] = useState([]);


  const onGoHandler = async (selectedWordOne, selectedWordTwo)=> { 

    setFirstWord(selectedWordOne); 
    setWordTwo(selectedWordTwo);


    try { 

      let response = await fetch(`http://192.168.1.184:8000/related_words/${selectedWordOne}/${selectedWordTwo}/data.json`);

      let json = await response.json();

      let wordOneRelations = json.wordOneSet;
      let wordTwoRelations = json.wordTwoSet;
      let firstDegreeWords = json.immediateWords;
      console.log(firstDegreeWords)
      setWordOneList([...wordOneRelations]);
      setWordTwoList([...wordTwoRelations]);
      setFirstDegreeWords(firstDegreeWords)
      } catch(error) {
      console.error(error)
      }
    };

  const goBackHandler = ()=> {
    setFirstWord(''); 
    setWordTwo(''); }

  let startScreen = <Start onPressHandler={onGoHandler}/>
  let wordsScreen = <FoundWords onPressHandler={goBackHandler}
  w1={firstWord} 
  w2={wordTwo}
  disparato={firstDegreeWords}
  w1List={wordOneList}
  w2List={wordTwoList}
  />;

  let content = startScreen;

  if (firstWord != '' && wordTwo != '') {
    content = wordsScreen;
  }

  // console.log('Word One: ' + firstWord + ' Word Two: ' + wordTwo)

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

