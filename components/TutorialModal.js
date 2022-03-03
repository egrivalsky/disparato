import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'

const WordMapModal = (props) => {
    const [ modalVisible, setModalVisible ] = useState(false)

    return (

        <View >

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("You closed the modal.");
                    setModalVisible(!modalVisible);
                }}                
            >

                <View style={styles.centeredView}>
                <Pressable onPress={() => {
                                setModalVisible(!modalVisible)
                            }}
                            >
                    <View style={styles.modalView}>
                        <Text style={styles.tutorialText}>
                            1. Enter two English words you'd like to explore{"\n"}
                            {"\n"}
                            2. Press 'go', and the app will show related words that those two have in common{"\n"}
                            {"\n"}
                            3. If nothing shows up, or if you just want more, try 'go deeper.'{"\n"}
                            {"\n"}
                            That will find common words separated by one degree. {"\n"}
                            {"\n"}
                            In the 'go deeper' list, you can click on a word to see how we came up with it.{"\n"}

                        </Text>
                    </View>
                    </Pressable>
                </View>
            </Modal>
            <Pressable onPress={() => {setModalVisible(true)}} >
                <Text style={styles.footerText} > 
                    [ how to use this ]
                </Text>
            </Pressable>

        </View>
    )

}

const styles = StyleSheet.create({

    keywordText: {
        fontFamily: 'tinos-bold',
    },
    parentWordText: {
        textAlign: "center"
    },
    tutorialText: {
        color: "black",
        fontSize: 20,
        paddingHorizontal: 32,
        marginVertical: 10,
        fontFamily: 'tinos-regular',
    },
    footerText: {
        fontSize: 22,
        fontFamily: 'tinos-regular',
        marginVertical: 10,
        padding: 0
      },
    word: {
        color: "white",
        fontSize: 24,
        paddingHorizontal: 40,
        fontFamily: 'tinos-regular',
    },
    wordCard: {
        width:'100%',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        borderRadius: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    modalView: {
        width: "90%",
        margin: 20,
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: .25,
        shadowRadius: 4,
        elevation: 5
    },



    });

export default WordMapModal;