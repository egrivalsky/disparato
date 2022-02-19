import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Keyboard, TouchableWithoutFeedback, Linking, Text } from 'react-native';
import Header from '../components/Header'
import ActionButton from '../components/ActionButton'

const Start = (props) => {
   
  let [ selectedWordOne, setSelectedWordOne ] = useState('')

  const wordOneHandler = inputOne => {
    setSelectedWordOne(inputOne.replace(' ', '').replace(/[0-9]/g, '').toLowerCase())
  }

  let [selectedWordTwo, setSelectedWordTwo ] = useState('')

  const wordTwoHandler = inputTwo => {
    setSelectedWordOne(inputOne.replace(' ', '').replace(/[0-9]/g, '').toLowerCase())
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

        <View style={styles.inputContainer}>
            <TextInput placeholder="first word" 
            autoCapitalize="none"
            style = {styles.inputBox} 
            value={selectedWordOne} 
            onChangeText={wordOneHandler}>
            </TextInput>

            <TextInput placeholder="second word" 
            autoCapitalize="none"
            style = {styles.inputBox} 
            value={selectedWordTwo} 
            onChangeText={wordTwoHandler}>
            </TextInput>
            <View style={styles.button} >
              <ActionButton title="[ GO ]" onPress={goButtonHandler}></ActionButton>
            </View>
        </View>

        <View style={styles.footer}>
          <Text onPress={()=> Linking.openURL('http://disparato.erikgrivalsky.com')} style={styles.footerText}>
            About Disparato
          </Text>
        </View>

      </View>

    </TouchableWithoutFeedback>
  );
    }

    const styles = StyleSheet.create({
      screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eaeaee'
        // backgroundColor: '#fff9f9'
      },
      button: {
        fontFamily: 'tinos-regular',
        marginTop: 40
      },
      inputContainer: {
        marginVertical: 150,
        paddingVertical: 30,
        height: 300,
        width: '80%',
        backgroundColor: 'lavender',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontFamily: 'tinos-regular'
        

      },
      inputBox: {
        minHeight: 60,
        paddingHorizontal: 10,
        marginTop: 20,
        width: '80%',
        height: '20%',
        borderColor: "black",
        borderWidth: 3,
        backgroundColor: 'white',
        fontFamily: 'tinos-regular',
        fontSize:24

      },
      footer: {
        bottom: 0,
        height: 32,
        
      },
      footerText: {
        fontSize: 22,
        fontFamily: 'tinos-regular',
        margin: 0,
        padding: 0
      }


    });

export default Start;