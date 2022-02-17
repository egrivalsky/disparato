import React, {useState, useEffect} from "react";
import {Text, ScrollView, View, StyleSheet, Button, Pressable, Modal, Alert, FlatList} from "react-native"
import Header from "../components/Header";
import WordMapModal from "../components/WordMapModal";


const TwoDegreeWords = (props) => {
  // const twoDegData = JSON.parse(props.data)
  // console.log("TwoDegData line 9")
  const twoDegData = props.data

  const [modalVisible, setModalVisible] = useState(false)
  const w1 = props.wordOne
  const w2 = props.wordTwo
  const twoDegArray=[]
  return(
    <View style={styles.screen}>
    <Header />
    <View style={styles.listHeadingContainer}>
        <Text style={styles.listHeading}>
            <Text style={styles.searchedWord}>{w1} </Text>
            <Text>&</Text>
            <Text style={styles.searchedWord}> {w2}</Text>
        </Text>
    </View>

    <View style={styles.list}>

      {twoDegData.map(item => {
           const thisWord = Object.keys(item).join();
           const wordOneParent = item[thisWord]["wordOneParent"].join();
           const wordTwoParent = item[thisWord]["wordTwoParent"].join();
           twoDegArray.push({"thisWord": thisWord, "wordOneParent": wordOneParent, "wordTwoParent": wordTwoParent});
})}
      <FlatList data={Object.keys(twoDegArray)} 
        renderItem={({ item }) => 
          <WordMapModal key={twoDegArray[item].thisWord} 
                        w1={w1} 
                        w2={w2} 
                        keyword={twoDegArray[item].thisWord} 
                        w1Parent={twoDegArray[item].wordOneParent.replace(/,/g, ' | ')} 
                        w2Parent={twoDegArray[item].wordTwoParent.replace(/,/g, ' | ')}>

          </WordMapModal>} 
          keyExtractor={(item, index) => index.toString()}>

      </FlatList>
    </View>
    <View style={styles.buttonsContainer} >
        <Button title="[   go   back   ]" onPress={()=>{props.goBackToFoundWordsHandler()}} />              
        <Button title="[ start over ]" onPress={()=>{props.onPressHandler()}} />

    </View>
  </View>
  )}

  const styles = StyleSheet.create({

    listHeadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    listHeading: {
        fontSize: 24,
        fontFamily: 'tinos-regular',
    },

    searchedWord: {
        fontSize: 28,
        fontFamily: 'tinos-regular',
    },

    list: {
        width: '100%',
        alignItems: 'center',
        height: '65%',
        paddingVertical: 10,

    },

    word: {
        fontSize: 22,
        paddingHorizontal: 40,

    },
    wordCard: {
        width:'100%',
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        borderRadius: 25,

    },

    buttonsContainer: {
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
    },
    button: {

    },
    screen: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: 22

      },

})


export default TwoDegreeWords;