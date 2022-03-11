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

                    <View style={styles.modalView}>
                        <Pressable style={styles.closeButton} onPress={() => {
                            setModalVisible(!modalVisible)
                            }}
                            >
                            <View >
                                <FontAwesome5 name="window-close" size={32} color="black" />
                            </View>
                        </Pressable>
                        <Text style={styles.modalText}>
                            {props.w1}
                        </Text>
                        <FontAwesome5 name="arrow-circle-down" size={24} color="black" />
                        <Text style={[styles.modalText, styles.parentWordText]}>
                            {props.w1Parent}
                        </Text>
                        <FontAwesome5 name="arrow-circle-down" size={24} color="black" />
                        <Text style={[styles.modalText, styles.keywordText]}>
                            {props.keyword}
                        </Text>
                        <FontAwesome5 name="arrow-circle-up" size={24} color="black" />
                        <Text style={[styles.modalText, styles.parentWordText]}>
                            {props.w2Parent}
                        </Text>
                        <FontAwesome5 name="arrow-circle-up" size={24} color="black" />
                        <Text style={styles.modalText}>
                            {props.w2}
                        </Text>

                        
                    </View>
                    
                </View>
            </Modal>

            <Pressable style={styles.wordCard}
                onPress={() => {setModalVisible(true)}}
            >
                <Text style={styles.word}>
                    {props.keyword}
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
    modalText: {
        color: "black",
        fontSize: 32,
        paddingHorizontal: 32,
        marginVertical: 10,
        fontFamily: 'tinos-regular',
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
        padding: 20,
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
    closeButton : {
        alignSelf: "flex-end"
    }



    });

export default WordMapModal;