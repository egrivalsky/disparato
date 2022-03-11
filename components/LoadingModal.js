import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import ActionButton from "./ActionButton";

const LoadingModal = (props) => {
    return (
        <View >

            <Modal
                animationType="fade"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Deep Search Cancelled");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.pleaseWait}>Searching... This can take can take 10-15 seconds, 
                        but it will get faster as more people use the app</Text>
                    </View>
                </View>

            </Modal>
        </View>
    )}

const styles = StyleSheet.create({
    pleaseWait: {
        fontFamily: 'tinos-regular',
        fontSize: 22,
    },
    modalText: {
        color: "black",
        fontSize: 32,
        paddingHorizontal: 32,
        marginVertical: 10,
        fontFamily: 'tinos-regular',
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

export default LoadingModal;