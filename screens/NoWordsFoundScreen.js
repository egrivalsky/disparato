import React, {useState} from "react";
import {Text, ScrollView, View, StyleSheet, Button, Pressable, Modal, Alert} from "react-native"
import Header from "../components/Header";
import LoadingModal from "../components/LoadingModal";
import ActionButton from "../components/ActionButton";
import colors from '../constants/colors';

const NoWordsFoundScreen = (props) => {
    const w1 = props.w1;
    const w2 = props.w2;

    const relatedWordsLists = {
        "wordOne": w1,
        "wordTwo": w2,
        "immediateWords": props.disparato,
        "wordOneList": props.w1List,
        "wordTwoList": props.w2List
    } 

    let [wordOneImmediateRelations, setWordOneImmediateRelations] = useState([]);
    let [wordTwoImmediateRelations, setWordTwoImmediateRelations] = useState([]);
    let [loadingDeepSearch, setLoadingDeepSearch] = useState(false)

    const goDeeperPressHandler = async () => {
        setLoadingDeepSearch(true)
        console.log("Searching...")
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
        <LoadingModal modalVisible={loadingDeepSearch}/>
        <Header />
        <View style={styles.listHeadingContainer}>
            <Text style={styles.listHeading}>
                <Text style={styles.searchedWord}>{w1} </Text>
                <Text>&</Text>
                <Text style={styles.searchedWord}> {w2}</Text>
            </Text>
        </View>

        <View style={styles.list}>
            <View style={styles.centeredView} >
                <Text style={styles.pleaseWait}>No immediately related words found.</Text>
                <Text style={styles.pleaseWait}>Try the "GO DEEP" button for words related through other words.</Text>
            </View>
        </View>
        <View style={styles.buttonsContainer}>
            <View style={styles.button}>                
            <ActionButton title="[ go back ]" style={styles.button} onPress={()=>{props.onPressHandler()}} />
            </View>
            <View style={styles.button}>
            <ActionButton title="[ go deep ]" style={styles.button} onPress={()=>{goDeeperPressHandler()}} />
            </View>
        </View>
    </View>

)}


export default NoWordsFoundScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background
      },
    pleaseWait: {
        fontFamily: 'tinos-regular',
        fontSize: 24,
        margin: 5,
        textAlign: 'center',
    },
    centeredView: {
        alignItems: "center",
        marginTop: 100,
        width: '60%',
    },
    listHeadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },

    listHeading: {
        fontSize: 24,
        fontFamily: 'tinos-regular'
    },

    list: {
        width: '100%',
        alignItems: 'center',
        height: '60%',
        paddingVertical: 10,

    },
    scrollView: {
        padding: 20,

    },
    word: {
        fontSize: 22,
        paddingHorizontal: 40,
        fontFamily: 'tinos-regular',
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