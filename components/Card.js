import React from "react";  
import { StyleSheet, View } from 'react-native';

const Card = (props) => { 
    return (
        <View style={[props.style, styles.inputCard]}>
            {props.children}
        </View>
    )
};

const styles  = StyleSheet.create({
    inputCard: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 8,
        marginHorizontal: 8
    },
});

export default Card;