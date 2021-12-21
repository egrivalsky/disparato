import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const Test = (props) => {

    const [ someText, setSomeText ] = useState('')

    const someTextHandler = pizza => {
        setSomeText(pizza)
        console.log(someText)
        setSomeText('')
    }

    return (
        <View style={styles.screen}>
            <TextInput style={styles.input} 
            onChangeText={someTextHandler}
            value={someText}>
            </TextInput>
            <Button title="Press Me" onPress={someTextHandler} />

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 40,
        height: '80%',
        width: '90%',
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 3,
        borderColor: 'black',
        width: 200,
        backgroundColor: '#bbb',
        fontSize: 24,
    }
})



export default Test;