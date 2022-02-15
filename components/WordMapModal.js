import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'

const WordMapModal = (props) => {
    const [ modalVisible, setModalVisible ] = useState(false)

    return (

        <View style={styles.centeredView} >

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
                        <Text style={styles.word}>
                            {props.w1}
                        </Text>
                        <FontAwesome5 name="arrow-circle-down" size={24} color="black" />
                        <Text style={styles.word}>
                            {props.w1Parent}
                        </Text>
                        <FontAwesome5 name="arrow-circle-down" size={24} color="black" />
                        <Text style={styles.word}>
                            {props.keyword}
                        </Text>
                        <FontAwesome5 name="arrow-circle-up" size={24} color="black" />
                        <Text style={styles.word}>
                            {props.w2Parent}
                        </Text>
                        <FontAwesome5 name="arrow-circle-up" size={24} color="black" />
                        <Text style={styles.word}>
                            {props.w2}
                        </Text>

                        
                    </View>
                    </Pressable>
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
    word: {
        color: "black",
        fontSize: 22,
        paddingHorizontal: 40,
    },
    wordCard: {
        width:'100%',
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        borderRadius: 25,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
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