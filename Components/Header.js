import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Colors from '../constants/colors'

export default function Header(props){
    return(
        <View style={styles.header} >
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}
const styles= StyleSheet.create({  
    header: {
        width:"100%",
        padding:50,
        alignItems:"center",
        justifyContent:"center",
        height:100,
        backgroundColor:Colors.primary,
    },
    title:{
        fontSize:30,
        color:"white",
        fontWeight:"bold",
    }
})