import React, {useState} from "react";
import {Text, ScrollView, View, StyleSheet, Button, Pressable, Modal, Alert} from "react-native"

const WordList = () => {
<View style={styles.list}>
<ScrollView style={styles.scrollView}>
    {props.disparato.map(word => 
        <View key={word} style={styles.wordCard}>
                <Text style={styles.word}>{word}</Text>
        </View>
    )}
</ScrollView>
</View>

    }

    const styles = StyleSheet.create({

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
            height: '70%',
            paddingVertical: 10,
    
        },
        scrollView: {
            paddingHorizontal: 20,
        },
        word: {
            fontSize: 22,
            paddingHorizontal: 40,
            fontFamily: 'tinos-regular',
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

export default WordList;