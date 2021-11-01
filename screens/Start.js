import React from "react";
import { View, StyleSheet, Button } from 'react-native';
import Header from '../components/Header'

const Start = (props) => {
    return (
        <View style={styles.screen}>
          <Header />
          <View style={styles.buttonContainer}>
              <Button title='Headlines'></Button>
              <Button title='manual'></Button>

          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
          width: '90%',
          height: '80%',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-around',
      }
    });

export default Start;