import React, {useState} from "react";
import {Text, ScrollView, View, StyleSheet, Button, Pressable, Modal, Alert} from "react-native"
// import AppLoading from 'expo-app-loading';
// import * as Font from 'expo-font';
import Header from "../components/Header";
import ActionButton from "../components/ActionButton";
import LoadingModal from '../components/LoadingModal';
import colors from '../constants/colors'

const FoundWords = (props) => {
    const w1 = props.w1;
    const w2 = props.w2;

    const relatedWordsLists = {
        "wordOne": w1,
        "wordTwo": w2,
        "immediateWords": props.disparato,
        "wordOneList": props.w1List,
        "wordTwoList": props.w2List
    } 

    // let [wordOneImmediateRelations, setWordOneImmediateRelations] = useState([]);
    // let [wordTwoImmediateRelations, setWordTwoImmediateRelations] = useState([]);
    // let [nothingFound, setNothingFound] = useState(props.firstWords)
    let [modalVisible, setModalVisible] = useState(false)
    const showModal = ()=> {setModalVisible(true)}

    const goDeeperPressHandler = async () => {

        showModal();

        // Alert.alert("Please be patient", "This can take a while, but it will speed up as more people use the app",
        // [
        //     {text: "okay",
        //     style: "cancel",
        // }
        // ])
        // console.log("Searching...")

        try { 
       
            let response = await fetch(`http://192.168.1.184:8000/second_degree_words`, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(relatedWordsLists)
          });
            let data = await response.json();

            props.updateTwoDegData(data);

            } catch(error) {
            console.error(error.message)
            }
          };

    return (
    <View style={styles.screen}>
        <LoadingModal modalVisible={modalVisible}/>
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
                {props.disparato.map(word => 
                <View key={word} style={styles.wordCard}>
                    <Text style={styles.word}>{word}</Text>
                </View>
                )}
            </ScrollView>
        </View>

        <View style={styles.buttonsContainer}>

            <View style={styles.button}>
                <ActionButton title="[   go   deep   ]" style={styles.button} onPress={()=>{goDeeperPressHandler()}} />
            </View>

            <View style={styles.button}>                
                <ActionButton  title="[   go   back   ]" style={styles.button} onPress={()=>{props.onPressHandler()}} />
            </View>

        </View>

    </View>

)}


export default FoundWords;

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
        fontFamily: 'tinos-regular'
    },
    searchedWord: {
        fontSize: 28,
        fontFamily: 'tinos-regular'
    },
    list: {
        width: '100%',
        alignItems: 'center',
        height: '60%',
        paddingVertical: 10,
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    word: {
        fontSize: 24,
        paddingHorizontal: 40,
        fontFamily: 'tinos-regular',
    },
    wordCard: {
        width:'100%',
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        borderRadius: 5,
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