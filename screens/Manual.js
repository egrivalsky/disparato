import * as React from "react";
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header'


const Manual = (props) => {
    return (
        <View style={styles.screen}>
          <Header />
          <View style={styles.buttonContainer} >
              <Text> 
                  Manual Page.
              </Text>

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

export default Manual;