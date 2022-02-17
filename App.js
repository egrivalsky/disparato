import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import TwoDegreeWords from './screens/TwoDegreeWords';
import Start from './screens/Start';
import FoundWords from './screens/FoundWords';
import ErrorScreen from './screens/ErrorScreen';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'tinos-regular': require('./assets/fonts/Tinos-Regular.ttf'),
    'tinos-bold': require('./assets/fonts/Tinos-Bold.ttf'),
  });
};

export default function App(props) {


  // let [ screenShown, setScreenShown ] = useState(startScreen);

  const [dataLoaded, setDataLoaded] = useState(false);


  let [ firstWord, setFirstWord ] = useState('');
  let [ wordTwo, setWordTwo ] = useState('');
  let [firstDegreeWords, setFirstDegreeWords] = useState([])
  let [wordOneList, setWordOneList] = useState([]);
  let [wordTwoList, setWordTwoList] = useState([]);
  let [goDeeperList1, setGoDeeperList1] = useState([])
  let [goDeeperList2, setGoDeeperList2] = useState([])
  // let [showLoadingScreen, setShowLoadingScreen] = useState(false)

  // let [goingDeeper, setGoingDeeper] = useState(false)
  let [twoDegreeData, setTwoDegreeData] = useState(null)

  if (!dataLoaded) {
    return <AppLoading 
    startAsync={fetchFonts}
    onFinish={()=>setDataLoaded(true)}
    onError={(err) => console.log('App.js Line 34: ' + err)}
    />
  }

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
  //   setShowLoadingScreen(true)
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

  let content

  if (firstWord == '' && wordTwo == '' && twoDegreeData == null) {
    content = startScreen;
  }

  else if (firstWord != '' && wordTwo != '' && twoDegreeData == null) {
    content = wordsScreen;
  }

  else if (firstWord != '' && wordTwo != '' && twoDegreeData == null) {

    content = <LoadingScreen />
  }
  else if (firstWord != '' && wordTwo != '' && twoDegreeData != null) {
    content = <TwoDegreeWords wordOne={firstWord} wordTwo={wordTwo} data={twoDegreeData} onPressHandler={goBackHandler} goBackToFoundWordsHandler={goBackToFoundWordsHandler}/>
  }
  else {
    content = <ErrorScreen onPressHandler={goBackHandler}/>
  }

  // console.log('Word One: ' + firstWord + ' Word Two: ' + wordTwo)

  return (
    <View style={styles.screen}>
      {content}
    {/* <ErrorScreen /> */}
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})

