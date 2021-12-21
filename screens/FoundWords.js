import React from "react";
import {Text, ScrollView, View, StyleSheet} from "react-native"
import Header from "../components/Header";


const FoundWords = () => {


    
    const listOfWords = "these are the words"
    
    return (


    <View style={styles.screen}>
        <View style={styles.wordList}>
        <Text style={styles.listItems}> list of words here...</Text>
        </View>

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