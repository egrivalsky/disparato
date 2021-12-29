import React from "react";
import {Text, ScrollView, View, StyleSheet, Button} from "react-native"
import Header from "../components/Header";


const FoundWords = (props) => {

    // console.log(JSON.stringify(props))
    
    const listOfWords = `${props.w1} meets ${props.w2}:`
    
    return (
    <View style={styles.screen}>
        <Header />
        <View style={styles.wordList}>
        <Text style={styles.listItems}>{listOfWords}</Text>
        <View>
            <Text>
                {props.allWords}
            </Text>
        </View>

        </View>
        <Button title="[ go back ]" onPress={()=>{props.onPressHandler()}} />
    </View>

)}


export default FoundWords;

const styles = StyleSheet.create({

    wordList: {
        fontSize: 28,
        padding: 36,
        justifyContent: 'center',
        alignItems: 'center',

    },
    listItems: {
        fontSize: 28,
    }
})