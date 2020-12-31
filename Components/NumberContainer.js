import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import Card from '../Components/Card'
import Colors from '../constants/colors'
import Input from '../Components/Input'

export default function NumberContainer(props){
    return (
        <View style={styles.container}>
            <Text style={styles.choice}>{props.selectedNumber}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Colors.accent,
        padding:10,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10,
    },
    choice:{
        color:Colors.accent,
        fontSize:22,       
    },
})