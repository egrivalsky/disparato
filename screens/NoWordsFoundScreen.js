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

    let [searching, setSearching] = useState(false);
    // let [modalVisible, setModalVisible] = useState(false)
    // const showModal = ()=> {setModalVisible(true)}

    const goDeeperPressHandler = async () => {
        // showModal();

        console.log("No Words Found -- Searching...")
        Alert.alert(
            "Searching...",
            "This can take can take 10-15 seconds, but it will get faster as more people use the app"
        )
        setSearching(true)
        try { 
       
            let response = await fetch(`http://disparato-env.eba-kmpmbcq5.us-east-2.elasticbeanstalk.com/second_degree_words`, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(relatedWordsLists)
          });
            let data = await response.json();

            
            props.updateTwoDegData(data);
            setSearching(false)
            } catch(error) {
            console.error(error.message)
            }
          };

    let content
    if(searching == false) {
        content =
        <View style={styles.list}>
            <View style={styles.centeredView} >
                <Text style={styles.pleaseWait}>No immediately related words found.</Text>
                <Text style={styles.pleaseWait}>Try the "GO DEEP" button for words related through other words.</Text>
            </View>
        </View>
    } else {
        content = <Text style={styles.pleaseWait}>Searching...</Text>
        }
    return (
    <View style={styles.screen}>
        {/* <LoadingModal modalVisible={modalVisible}/> */}
        <Header />
        <View style={styles.listHeadingContainer}>
            <Text style={styles.listHeading}>
                <Text style={styles.searchedWord}>{w1} </Text>
                <Text>&</Text>
                <Text style={styles.searchedWord}> {w2}</Text>
            </Text>
        </View>
        { content }
        {/* <View style={styles.list}>
            <View style={styles.centeredView} >
                <Text style={styles.pleaseWait}>No immediately related words found.</Text>
                <Text style={styles.pleaseWait}>Try the "GO DEEP" button for words related through other words.</Text>
            </View>
        </View> */}
        <View style={styles.buttonsContainer}>

            <View style={styles.button}>
                <ActionButton title="[ go deep ]" style={styles.button} onPress={()=>{goDeeperPressHandler()}} />
            </View>

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
        margin: 5,
        textAlign: 'center',
    },
    centeredView: {
        alignItems: "center",
        marginTop: 100,
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
        height: '50%',
        paddingVertical: 10,

    },
    scrollView: {
        padding: 20,

    },
    word: {
        fontSize: 22,
        paddingHorizontal: 40,
        fontFamily: 'tinos-regular',
    },

    buttonsContainer: {
        height: 200, 
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        margin: 5,
    },
})