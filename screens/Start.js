import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from 'react-native';
import Header from '../components/Header'

const Start = (props) => {
   
  let [ firstWord, setFirstWord ] = useState('')

  const firstWordHandler = inputText => {
    setFirstWord(inputText)
    // console.log(typeof(firstWord))
  }
  let [wordTwo, setWordTwo ] = useState('')

  const wordTwoHandler = inputTwo => {
    setWordTwo(inputTwo)
  }

  const goButtonHandler = ()=> {
    console.log(firstWord);
    console.log(wordTwo);
    setFirstWord('');
    setWordTwo('');
  }

    return (
      <View style={styles.screen}>
      <Header />

      <View style={styles.buttonContainer}>
          <TextInput placeholder="First Word" 
          style = {styles.inputBox} 
          value={firstWord} 
          onChangeText={firstWordHandler}>
          </TextInput>

          <TextInput placeholder="Second Word" 
          style = {styles.inputBox} 
          value={wordTwo} 
          onChangeText={wordTwoHandler}>
          </TextInput>

          <Button title="Go!" onPress={goButtonHandler}></Button>

      </View>

    </View>
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