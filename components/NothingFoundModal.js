import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'

const NothingFoundModal = (props) => {
    const [ modalVisible, setModalVisible ] = useState(props.modalVisible)


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
                    <Pressable onPress={()=>setModalVisible(!modalVisible)} >

                        <View style={styles.modalView}>

                            <Text style={styles.pleaseWait}>No immediately related words found.</Text>
                            <Text style={styles.pleaseWait}>Try the "GO DEEP" button for words related through other words.</Text>
                    
                        </View>
                    </Pressable>
                </View>

            </Modal>

        </View>
    )

}

const styles = StyleSheet.create({
    pleaseWait: {
        fontFamily: 'tinos-regular',
        fontSize: 22,
        margin: 5,
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

export default NothingFoundModal;