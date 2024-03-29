import React from 'react';      
import { View, StyleSheet, Text } from 'react-native';

const Header = (props) => {
    // return (
    //     <View style={styles.header}>
    //         <Text style={styles.disparato}>
    //             [Disparato]
    //         </Text>
    //     </View>
    // );

    return (
        <View style={styles.header}>
            <Text style={styles.disparato} >
                [ d i s p a r a t o ]
            </Text>
        </View>
    );
}



const styles = StyleSheet.create({

    disparato: {
        fontFamily: 'tinos-bold',
        fontSize: 36,
        color: 'black'
    },

    header: {    
        width: '100%',
        backgroundColor: 'lavender',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
    }
})

export default Header;

