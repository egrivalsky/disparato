import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/Header'

const Start = (props) => {
   
  let [ selectedWordOne, setSelectedWordOne ] = useState('')

  const wordOneHandler = inputOne => {
    setSelectedWordOne(inputOne)
  }

  let [selectedWordTwo, setSelectedWordTwo ] = useState('')

  const wordTwoHandler = inputTwo => {
    setSelectedWordTwo(inputTwo)
  }

  const goButtonHandler = ()=> {
    console.log(selectedWordOne);
    console.log(selectedWordTwo);
    props.onPressHandler(selectedWordOne, selectedWordTwo);

    setSelectedWordOne('');
    setSelectedWordTwo('');
  }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <View style={styles.screen}>
        <Header />

        <View style={styles.buttonContainer}>
            <TextInput placeholder="First Word" 
            style = {styles.inputBox} 
            value={selectedWordOne} 
            onChangeText={wordOneHandler}>
            </TextInput>

            <TextInput placeholder="Second Word" 
            style = {styles.inputBox} 
            value={selectedWordTwo} 
            onChangeText={wordTwoHandler}>
            </TextInput>

            <Button title="Go!" onPress={goButtonHandler}></Button>

        </View>
        

      </View>
    </TouchableWithoutFeedback>
  );
    }

    const styles = StyleSheet.create({
      screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

      },
      
      buttonContainer: {
        marginVertical: 150,
        paddingTop: 40,
        height: 200,
        width: '80%',
        backgroundColor: 'lavender',
        alignItems: 'center',
        justifyContent: 'space-around'

      },
      inputBox: {
        minHeight: 40,
        paddingHorizontal: 10,
        width: '80%',
        height: '20%',
        borderColor: "black",
        borderWidth: 3,
        backgroundColor: 'white',

      }


    });

export default Start;