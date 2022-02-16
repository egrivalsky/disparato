import React, {useState} from "react";
import {Text, ScrollView, View, StyleSheet, Button, Pressable, Modal, Alert} from "react-native"
import Header from "../components/Header";
import WordMapModal from "../components/WordMapModal";


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

    let [wordOneImmediateRelations, setWordOneImmediateRelations] = useState([]);
    let [wordTwoImmediateRelations, setWordTwoImmediateRelations] = useState([]);


    const goDeeperPressHandler = async () => {
        // props.onGoDeepHandler();
        console.log("Searching...")
        try { 
            // console.log(props.w1List);
            // console.log(props.w2List);
            // relatedWordsListsString = JSON.stringify(relatedWordsLists) 
            // console.log(JSON.stringify(relatedWordsLists));        
            let response = await fetch(`http://192.168.1.184:8000/second_degree_words`, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(relatedWordsLists)
          });
            let data = await response.json();
            // data = JSON.stringify(data);
            // data.map(result => {
            //     keyWord = Object.keys(result)
            //     key={keyWord}
            //     console.log(`${w1} ---> ${result[keyWord]['wordOneParent']} ---> ${keyWord}  <--- ${result[keyWord]['wordTwoParent']} <--- ${w2} \n`)
            // })
            
            props.updateTwoDegData(data);
            console.log("line 48 FoundWords:")
            console.log(typeof data)
            // console.log(JSON.stringify(data))
            // console.log("computed")


            // console.log(json)
            // let firstDegreeWords = json.immediateWords
            // console.log(firstDegreeWords)
            // setAllWords(firstDegreeWords)
            } catch(error) {
            console.error(error.message)
            }
          };
    
    return (
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
                {props.disparato.map(word => 
                    <View key={word} style={styles.wordCard}>
                            <Text style={styles.word}>{word}</Text>
                    </View>
                )}
            </ScrollView>
        <>{/* <View style={styles.list}>
            <ScrollView style={styles.scrollView}>
                {data.map(result => {
                keyword = Objects.keys(result);
                <View key={keyword} style={styles.wordCard}>
                    <Text>{keyWord}</Text>
                </View>
            }) 
        }
            </ScrollView> */}</>
        
 
        </View>

        <View style={styles.buttonsContainer}>                
           <Button title="[ go back ]" style={styles.button} onPress={()=>{props.onPressHandler()}} />
           <Button title="[ go deep ]" style={styles.button} onPress={()=>{goDeeperPressHandler()}} />
        </View>
    </View>

)}


export default FoundWords;

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
    
    screen: {
        flex: 1,
        alignItems: 'center'

      }
})