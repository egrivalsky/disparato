import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'

const LoadingModal = (props) => {
    // const [ modalVisible, setModalVisible ] = useState(false)
    const modalVisible=props.modalVisible


    return (

        <View style={styles.centeredView} >

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                // onRequestClose={() => {
                //     Alert.alert("You closed the modal.");
                //     setModalVisible(!modalVisible);
                // }}                
            >

                <View style={styles.centeredView}>

                    <View style={styles.modalView}>

                    <Text style={styles.pleaseWait}>This can take several seconds, but it will get faster the more that people use the app</Text>
                        
                    </View>

                </View>
            </Modal>

        </View>
    )

}

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