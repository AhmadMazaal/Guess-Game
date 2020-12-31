import * as React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default function Input(props){
    return (
        <TextInput  {...props}  style={{...props.style,...styles.txt}} placeholder="EX: 5.."/>
    )
}
const styles = StyleSheet.create({
    txt:{        
        height:30,
        padding:1,
        borderBottomWidth:1,
        borderBottomColor:"gray",
        marginVertical:10,
    },
})