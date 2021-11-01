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
    header: {
        marginTop: 36,
        width: '100%',
        backgroundColor: 'lavender',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    disparato: {
        fontSize: 36,
        color: 'black'
    }
})

export default Header;