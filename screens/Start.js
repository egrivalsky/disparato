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
    // console.log(selectedWordOne);
    // console.log(selectedWordTwo);
    props.onPressHandler(selectedWordOne, selectedWordTwo);

    setSelectedWordOne('');
    setSelectedWordTwo('');

  // const netHandler = async () => {
  //   try { 
  //       let response = await fetch('http://192.168.1.184:8000/related_words/puppy/kitten/data.json');

  //       let json = await response.json();
  //       console.log(json)
  //       return response 

  //   } catch(error) {
  //       console.log(error)
  //   }
  // }
    // .then(disparato => console.log('JSON: ' + JSON.stringify(disparato)))
    // .then(console.log('all done on the front end'))
    // .catch(error => console.log('ERROR: ' + error.message))
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
            {/* <Button title="Check the 'Net" onPress={netHandler}></Button>  */}
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