import React, {useState} from "react";
import {Text, View, StyleSheet, Alert} from "react-native"
import Header from "../components/Header";
import ActionButton from "../components/ActionButton";
import LoadingModal from "../components/LoadingModal";
import colors from '../constants/colors';

const NoWordsFoundScreen = (props) => {
    const w1 = props.w1;
    const w2 = props.w2;
    const relatedWordsLists = {
        "wordOne": w1,
        "wordTwo": w2,
        "immediateWords": props.disparato,
        "wordOneList": props.w1List,
        "wordTwoList": props.w2List
    }

    // let [modalVisible, setModalVisible] = useState(false)
    // const showModal = ()=> {setModalVisible(true)}

    const goDeeperPressHandler = async () => {
        // showModal();

        console.log("Searching...")
        Alert.alert(
            "Searching...",
            "This can take can take 10-15 seconds, but it will get faster as more people use the app"
        )
        try { 
       
            let response = await fetch(`http://192.168.1.184:8000/second_degree_words`, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(relatedWordsLists)
          });
            let data = await response.json();

            
            props.updateTwoDegData(data);

            } catch(error) {
            console.error(error.message)
            }
          };

    return (
    <View style={styles.screen}>
        <Header />
        <View style={styles.listHeadingContainer}>
            <Text style={styles.listHeading}>
                <Text style={styles.searchedWord}>{w1} </Text>
                <Text>&</Text>
                <Text style={styles.searchedWord}> {w2}</Text>
            </Text>
        </View>

        <View style={styles.list}>
            <View style={styles.centeredView} >
                <Text style={styles.pleaseWait}>Wow. After all of that we still found nothing.</Text>
                <Text style={styles.pleaseWait}>Sorry.</Text>
            </View>
        </View>
        <View style={styles.buttonsContainer}>

            <View style={styles.button}>                
                <ActionButton title="[ go back ]" style={styles.button} onPress={()=>{props.onPressHandler()}} />
            </View>

        </View>
    </View>

)}


export default NoWordsFoundScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background
      },
    pleaseWait: {
        fontFamily: 'tinos-regular',
        fontSize: 24,
        margin: '2%',
        textAlign: 'center',
    },
    centeredView: {
        alignItems: "center",
        marginTop: '20%',
        width: '60%',
    },
    listHeadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },

    listHeading: {
        fontSize: 24,
        fontFamily: 'tinos-regular'
    },

    list: {
        width: '100%',
        alignItems: 'center',
        height: '40%',
        paddingVertical: '3%',

    },

    buttonsContainer: {
        height: '20%', 
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        margin: '5%',
    },
})