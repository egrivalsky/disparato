import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native'
import TwoDegreeWordsScreen from './screens/TwoDegreeWordsScreen';
import Start from './screens/Start';
import FoundWords from './screens/FoundWords';
import GeneralErrorScreen from './screens/GeneralErrorScreen';
import NoWordsFoundScreen from './screens/NoWordsFoundScreen';
import NoWordsFoundAtAllScreen from './screens/NoWordsFoundAtAllScreen';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
// import { Alert } from 'react-native-web';

const fetchFonts = () => {
  return Font.loadAsync({
    'tinos-regular': require('./assets/fonts/Tinos-Regular.ttf'),
    'tinos-bold': require('./assets/fonts/Tinos-Bold.ttf'),
  });
};

export default function App(props) {

  let [dataLoaded, setDataLoaded] = useState(false);
  let [ firstWord, setFirstWord ] = useState('');
  let [ wordTwo, setWordTwo ] = useState('');
  let [firstDegreeWords, setFirstDegreeWords] = useState([])
  // let [wordOneList, setWordOneList] = useState([]);
  // let [wordTwoList, setWordTwoList] = useState([]);
  let [goDeeperList1, setGoDeeperList1] = useState([])
  let [goDeeperList2, setGoDeeperList2] = useState([])
  let [error, setError] = useState(false)
  let [errorMessage, setErrorMessage] = useState('')
  let [modalVisibility, setModalVisibility] = useState(false)
  let [nothingFound, setNothingFound] = useState(false)
  let [twoDegreeData, setTwoDegreeData] = useState(null)
  let [initialSearchExecuted, setInitialSearchExecuted] = useState(false)

  if (!dataLoaded) {
    return <AppLoading 
    startAsync={fetchFonts}
    onFinish={()=>setDataLoaded(true)}
    onError={(err) => console.log('App.js Line 34: ' + err)}
    />
  }
  let content = startScreen

  const onGoHandler = async (selectedWordOne, selectedWordTwo)=> { 
    setFirstWord(selectedWordOne); 
    setWordTwo(selectedWordTwo);
    let connection
    try {
      let ping = await fetch('http://disparato-env.eba-kmpmbcq5.us-east-2.elasticbeanstalk.com/')
      // let ping = await fetch('http://192.168.1.143:8000/')
      
      // let ping = await fetch('http://18.188.249.149')
      console.log(ping.status)
      if (ping.status == 200) {
        connection = true
      } else {
        connection = false
      }
    } catch {
      connection = false
    }
    if (connection == true)  {
      try {
        console.log('connection ' + connection)
          let response = await fetch(`http://disparato-env.eba-kmpmbcq5.us-east-2.elasticbeanstalk.com/related_words/${selectedWordOne}/${selectedWordTwo}/data.json`);
          // let response = await fetch(`http://192.168.1.143:8000/related_words/${selectedWordOne}/${selectedWordTwo}/data.json`);
          // let response = await fetch(`http://18.188.249.149/related_words/${selectedWordOne}/${selectedWordTwo}/data.json`);

          let json = await response.json();
          if (json.error) {
            if (json['displayMessageToUser']) {
              setErrorMessage(json['message'])
            }
            console.log(json.message)
            console.log(json.origin)
            setError(true)

          } else {

          let firstDegreeWords = json.immediateWords;
          let deeperList1 = json.goDeeperList1;
          let deeperList2 = json.goDeeperList2;

          setInitialSearchExecuted(true)
          setFirstDegreeWords(firstDegreeWords)
          setGoDeeperList1([...deeperList1])
          setGoDeeperList2([...deeperList2])
          }

          } catch(error) {
          console.error(error)
          }
        } else {
          Alert.alert(
            "Cannot connect to Disparato server",
            "Please check your Internet connection and/or try again later."
          )
          connection = true
        }
        };

  const goBackHandler = ()=> {
    setNothingFound(false);
    setFirstWord(''); 
    setWordTwo(''); 
    setTwoDegreeData(null);
    setError(false);
    setInitialSearchExecuted(false)};

  const goBackToFoundWordsHandler = ()=> {  
    setTwoDegreeData(null);
    setNothingFound(false);
  };

  const twoDegWords = data => {
      setTwoDegreeData(data);
  }

  const loadingModalHandler = () => {
    setModalVisibility(!modalVisibility)
    console.log("SetModalVisibilty app.js line 103")
  }

  const cancelDeepSearch = () => {
    setTwoDegreeData(null)
  }

  let startScreen = <Start onPressHandler={onGoHandler}/>;
  let wordsScreen = <FoundWords onPressHandler={goBackHandler}
  cancelDeepSearch={cancelDeepSearch}
  w1={firstWord} 
  w2={wordTwo}
  disparato={firstDegreeWords}
  firstWords={nothingFound}
  w1List={goDeeperList1}
  w2List={goDeeperList2}
  updateTwoDegData={twoDegWords}
  loadingDeepSearch={loadingModalHandler}
  />;
  let twoDegreeWordsScreen = <TwoDegreeWordsScreen wordOne={firstWord} wordTwo={wordTwo} data={twoDegreeData} onPressHandler={goBackHandler} goBackToFoundWordsHandler={goBackToFoundWordsHandler}/>;
  let generalErrorScreen = <GeneralErrorScreen onPressHandler={goBackHandler} message={errorMessage}/>
  let noResultsScreen = <NoWordsFoundScreen onPressHandler={goBackHandler}
    w1={firstWord} 
    w2={wordTwo}
    disparato={firstDegreeWords}
    firstWords={nothingFound}
    w1List={goDeeperList1}
    w2List={goDeeperList2}
    updateTwoDegData={twoDegWords}
  />
  let goDeepFailure = <NoWordsFoundAtAllScreen w1={firstWord} w2={wordTwo} onPressHandler={goBackHandler}/>

//NAVIGATION
  if (!error) {
    if (firstWord == '' && wordTwo == '' && twoDegreeData == null) {
      content = startScreen;
    }
    else if (initialSearchExecuted == true && firstWord != '' && wordTwo != '' && firstDegreeWords.length <= 0 && twoDegreeData == null) {
      content = noResultsScreen
    }
    else if (initialSearchExecuted = true && twoDegreeData == null) {
      content = wordsScreen;
    }
    else if (firstWord != '' && wordTwo != '' && twoDegreeData['error']) {
      content = goDeepFailure
    }
    else if (firstWord != '' && wordTwo != '' && twoDegreeData != null) {
      content = twoDegreeWordsScreen
    }
    else {
      content = generalErrorScreen
    }
  } else {
    content = generalErrorScreen
  }

  return (
    <View style={styles.screen}>
      {content}
      {/* <NoWordsFoundScreen /> */}
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 36,
    flex: 1,
  }
})
