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
        fontSize: 36,
        color: 'black'
    },

    header: {    
        width: '100%',
        backgroundColor: 'lavender',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Header;

