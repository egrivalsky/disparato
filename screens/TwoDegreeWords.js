import React, {useState, useEffect} from "react";
import {Text, ScrollView, View, StyleSheet, Button, Pressable, Modal, Alert} from "react-native"
import Header from "../components/Header";
import WordMapModal from "../components/WordMapModal";


const TwoDegreeWords = (props) => {
  // const twoDegData = JSON.parse(props.data)
  // console.log("TwoDegData line 9")
  const twoDegData = props.data

  const [modalVisible, setModalVisible] = useState(false)
  const w1 = props.wordOne
  const w2 = props.wordTwo
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
      <ScrollView style={styles.scrollView}>

        {twoDegData.map(item => {
           const thisWord = Object.keys(item).join();
           const wordOneParent = item[thisWord]["wordOneParent"].join();
          //  const wordOneParent = "crystal, faces, tooth"
           const wordTwoParent = item[thisWord]["wordTwoParent"].join();
           console.log(typeof wordOneParent);
           return(<WordMapModal key={thisWord} w1={w1} w2={w2} keyword={thisWord} w1Parent={wordOneParent.replace(/,/g, ' | ')} w2Parent={wordTwoParent.replace(/,/g, ' | ')}></WordMapModal>)
           
})}

      </ScrollView>
    </View>
  </View>
  )}

  const styles = StyleSheet.create({

    listHeadinContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    listHeading: {
        fontSize: 24,   
    },
    searchedWord: {
        fontSize: 28,
    },

    list: {
        width: '100%',
        alignItems: 'center',
        height: '70%',
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
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: .25,
      shadowRadius: 4,
      elevation: 5
  },
})


export default TwoDegreeWords;