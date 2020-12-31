import * as React from 'react';
import {View, StyleSheet, Text, Alert, Button, useRef, useEffect} from 'react-native';
import NumberContainer from './NumberContainer';
import Card from './Card'
import Colors from '../constants/colors'


const generateGuess = (min,max,exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max-min))+ min
    if (randomNumber === exclude){
            return generateGuess(min,max,exclude)
        }
    else
        {       
            return randomNumber
        }
};
const GameScreen = props =>{
  
    const [currentGuess,setGuess] = React.useState(generateGuess(1,100,props.userChoice))
    const [rounds,setGameRounds] = React.useState(0)
    const currentLow = React.useRef(1)
    const currentHigh = React.useRef(100)
    const {userChoice, onGameOver} = props;
    React.useEffect(()=>{
        if(currentGuess == props.userChoice)
            onGameOver(rounds)
            // Alert.alert('Game Over!',`Number of rounds ${rounds}`,[{text:'Restart Game', style:'default',},{cancalable:true},])
            
    },[currentGuess, userChoice, onGameOver]);

    const nextGuessHandlder = direction => {
        if( (direction === 'lower' && currentGuess < props.userChoice ) || (direction === 'greater' && currentGuess > props.userChoice )){
        Alert.alert('Don\'t lie!', 'You know that this is wrong...',[{text:"Sorry!",style:"cancel"}]);
        return;
        }
        if(direction === 'lower')
            currentHigh.current = currentGuess
        else
            currentLow.current = currentGuess

        const nextNumber = generateGuess(currentLow.current, currentHigh.current, currentGuess)
        setGuess(nextNumber)
        setGameRounds(round => round + 1)
    };
    

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Opponent's Guess</Text>
            <NumberContainer selectedNumber ={currentGuess}></NumberContainer>
            <Card style={styles.resultBox}>
                <Button color={Colors.primary} title="Lower" onPress={nextGuessHandlder.bind(this,'lower')} />
                <Button color={Colors.primary} title="Greater" onPress={nextGuessHandlder.bind(this,'greater')}/>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    title:{
        marginVertical:20,
        fontSize:20,
    },
    resultBox:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        width:300,
        maxWidth:"80%",
        marginVertical:50,
        borderRadius:2,
    }
})
export default GameScreen