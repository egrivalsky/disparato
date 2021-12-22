import React from "react";
import {Text, ScrollView, View, StyleSheet, Button} from "react-native"
import Header from "../components/Header";


const FoundWords = (props) => {


    
    const listOfWords = "these are the words..."
    
    return (
    <View style={styles.screen}>
        <Header />
        <View style={styles.wordList}>
        <Text style={styles.listItems}>{listOfWords}</Text>
        <Button title="[ go back ]" onPress={()=>{props.onPressHandler()}} />
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