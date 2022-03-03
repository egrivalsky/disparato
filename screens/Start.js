import React, { useState } from "react";
import { View, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, Linking, Text, Alert } from 'react-native';
import Header from '../components/Header'
import ActionButton from '../components/ActionButton'
import TutorialModal from '../components/TutorialModal'
import colors from '../constants/colors'

const Start = (props) => {

  let [ selectedWordOne, setSelectedWordOne ] = useState('')

  const wordOneHandler = inputOne => {
    setSelectedWordOne(inputOne.replace(' ', '').replace(/[0-9]/g, '').toLowerCase())
  }

  let [selectedWordTwo, setSelectedWordTwo ] = useState('')

  const wordTwoHandler = inputTwo => {
    setSelectedWordTwo(inputTwo.replace(' ', '').replace(/[0-9]/g, '').toLowerCase())
  }

  const goButtonHandler = ()=> {
    if (
      (selectedWordOne.length > 0) && (selectedWordTwo.length > 0)
      && (
        (selectedWordOne != selectedWordTwo)
      )) {
      props.onPressHandler(selectedWordOne, selectedWordTwo);
      } else {
        Alert.alert("Whoops", 
                    "Please enter two different English words",
                    [
                      {
                        text: "Fine",
                        style: "cancel",
                      }
                    ])
      }

    setSelectedWordOne('');
    setSelectedWordTwo('');
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
          <TutorialModal />
          <Text onPress={()=> Linking.openURL('http://disparato.erikgrivalsky.com')} style={styles.footerText}>
            [ about disparato ]
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
        padding: 10,
        backgroundColor: colors.background,

      },
      button: {
        fontFamily: 'tinos-regular',
        marginTop: 40
      },
      inputContainer: {
        marginTop: 50,
        marginBottom: 200,
        paddingVertical: 30,
        height: 300,
        width: '80%',
        backgroundColor: 'lavender',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontFamily: 'tinos-regular',

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
        height: '100%',
        
      },
      footerText: {
        fontSize: 22,
        fontFamily: 'tinos-regular',
        marginVertical: 10,
        padding: 0
      }


    });

export default Start;