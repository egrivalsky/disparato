import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ActionButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#939597',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 18
  },
  buttonText: {
    color: 'white',
    fontFamily: 'tinos-regular',
    fontSize: 20
  }
});

export default ActionButton;
