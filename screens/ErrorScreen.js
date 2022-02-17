import React from "react";
import { View, StyleSheet, Linking, Text, Button } from 'react-native';
import Header from '../components/Header'

const ErrorScreen = (props) => {
   
    return (

      <View style={styles.screen}>
        <Header />

        <View style={styles.buttonContainer}>

            <Text style={styles.errorMessage}>Something went wrong.</Text>
            <Text style={styles.errorMessage}>I'm so sorry.</Text>

        </View>

        <View style={styles.buttonsContainer}>                
           <Button title="[ start over ]" style={styles.button} onPress={()=>{props.onPressHandler()}} />
        </View>

        <View style={styles.footer}>
          <Text onPress={()=> Linking.openURL('http://disparato.erikgrivalsky.com')} style={styles.footerText}>
            About Disparato
          </Text>
        </View>

      </View>


  );
    }

    const styles = StyleSheet.create({
      screen: {
        flex: 1,
        alignItems: 'center',
      },
      errorMessage: {
          fontFamily: 'tinos-regular',
          fontSize: 32,
      },
      buttonContainer: {
        marginVertical: 150,
        paddingTop: 40,
        height: 200,
        width: '80%',
        backgroundColor: 'lavender',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontFamily: 'tinos-regular'
      },
      footer: {
        position: "absolute",
        bottom: 10,
        height: 32,
        
      },
      
    });

export default ErrorScreen;