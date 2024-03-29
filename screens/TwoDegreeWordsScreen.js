import React, {useState, useMemo} from "react";
import {Text, View, StyleSheet, FlatList} from "react-native"
import Header from "../components/Header";
import WordMapModal from "../components/WordMapModal";
import ActionButton from "../components/ActionButton";
import colors from '../constants/colors'


const TwoDegreeWordsScreen = (props) => {

  const twoDegData = props.data
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


      <FlatList style={styles.scrollView} data={Object.keys(twoDegArray)} 
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
    <View style={styles.buttonsContainer}>
            <View style={styles.button}>                
                <ActionButton title="[  go  back  ]" onPress={()=>{props.goBackToFoundWordsHandler()}} />     
            </View>
            <View style={styles.button}>
                <ActionButton title="[ start over ]" onPress={()=>{props.onPressHandler()}} />
            </View>
        </View>
  </View>
  )}

  const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background
      },
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
        height: '50%',
        paddingVertical: 10,
    },
    scrollView: {
        paddingHorizontal: 20,
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
        height: 200, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        margin: 5,
    },

})


export default TwoDegreeWordsScreen;