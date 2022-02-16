import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native'
import TwoDegreeWords from './screens/TwoDegreeWords';
import Start from './screens/Start';
import FoundWords from './screens/FoundWords';
import Test from './components/Test'
import TutorialModal from './components/TutorialModal';

import WordMapModal from './components/WordMapModal';


export default function App(props) {

  // let [ screenShown, setScreenShown ] = useState(startScreen);
  let [ firstWord, setFirstWord ] = useState('');
  let [ wordTwo, setWordTwo ] = useState('');
  let [firstDegreeWords, setFirstDegreeWords] = useState([])
  let [wordOneList, setWordOneList] = useState([]);
  let [wordTwoList, setWordTwoList] = useState([]);
  let [goDeeperList1, setGoDeeperList1] = useState([])
  let [goDeeperList2, setGoDeeperList2] = useState([])
  // let [goingDeeper, setGoingDeeper] = useState(false)
  let [twoDegreeData, setTwoDegreeData] = useState(null)


  const onGoHandler = async (selectedWordOne, selectedWordTwo)=> { 

    setFirstWord(selectedWordOne); 
    setWordTwo(selectedWordTwo);

    try { 
      let response = await fetch(`http://192.168.1.184:8000/related_words/${selectedWordOne}/${selectedWordTwo}/data.json`);

      let json = await response.json();

      let wordOneRelations = json.wordOneList;
      let wordTwoRelations = json.wordTwoList;
      let firstDegreeWords = json.immediateWords;
      let deeperList1 = json.goDeeperList1;
      let deeperList2 = json.goDeeperList2;

      // console.log(firstDegreeWords)
      setWordOneList(wordOneRelations);
      setWordTwoList(wordTwoRelations);
      setFirstDegreeWords(firstDegreeWords)
      setGoDeeperList1([...deeperList1])
      setGoDeeperList2([...deeperList2])

      } catch(error) {
      console.error(error)
      }

    };

  const goBackHandler = ()=> {
    setFirstWord(''); 
    setWordTwo(''); 
    setTwoDegreeData(null)};

  const goBackToFoundWordsHandler = ()=> {  
    setTwoDegreeData(null);
  };

  // const goDeepHandler = ()=> {
  //   setGoingDeeper(true)
  // }

  const twoDegWords = data => {
    // console.log(data)
    // console.log(data)
    setTwoDegreeData(data)
    console.log("App line 65")

    // setGoingDeeper(true);
    // data.map(result => {
    //   keyWord = Object.keys(result)
    //   key={keyWord}
    //   console.log(`${firstWord} ---> ${result[keyWord]['wordOneParent']} ---> ${keyWord}  <--- ${result[keyWord]['wordTwoParent']} <--- ${wordTwo} \n`)
  // })
  }

  let startScreen = <Start onPressHandler={onGoHandler}/>;
  let wordsScreen = <FoundWords onPressHandler={goBackHandler}
  w1={firstWord} 
  w2={wordTwo}
  disparato={firstDegreeWords}
  w1List={goDeeperList1}
  w2List={goDeeperList2}
  // onGoDeepHandler={goDeepHandler}
  updateTwoDegData={twoDegWords}
  />;

  let content = startScreen;

  if (firstWord != '' && wordTwo != '' && twoDegreeData == null) {
    content = wordsScreen;
  }

  if (firstWord != '' && wordTwo != '' && twoDegreeData != null) {
    content = <TwoDegreeWords wordOne={firstWord} wordTwo={wordTwo} data={twoDegreeData} onPressHandler={goBackHandler} goBackToFoundWordsHandler={goBackToFoundWordsHandler}/>
  }
  

  // console.log('Word One: ' + firstWord + ' Word Two: ' + wordTwo)

  return (
    <View style={styles.screen}>
      {content}
      {/* <WordMapModal /> */}
      {/* <TwoDegreeWords /> */}
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

