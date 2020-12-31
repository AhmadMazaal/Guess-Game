import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert, 
    TextInput,
    Modal
} from 'react-native';
import Card from '../Components/Card'
import Colors from '../constants/colors'
import Input from '../Components/Input'
import NumberContainer from '../Components/NumberContainer';

export default function StartGameScreen(props) {

    const [enteredValue,setEnteredValue] = React.useState('');
    const [choice,setUserChoice] = React.useState(false);
    const [selectedNumber,setSelectedNumber] = React.useState('');

    const enteredValueHandler = input => {
        setEnteredValue(input.replace(/[^0-9]/g,''))
    }

    let choiceOutput
    const resetInputHandler = () => {
        setEnteredValue('');
    }

    
    const confirmInputHannlder = () =>{
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 || chosenNumber.length === 0 ){
            Alert.alert('Invalid number!','Number has to between 1 & 99',[{text:'Okay',style:'descructive',onPress : resetInputHandler,}])
        setSelectedNumber('')
        }
        setUserChoice(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss();
    }
    if(choice)
        choiceOutput =
        <Card style={styles.choice}>
            <Text style={styles.choiceText}>You selected: </Text>
            <NumberContainer selectedNumber={selectedNumber} ></NumberContainer>
            <Button color={Colors.primary} title="Start Game" onPress={() => props.onStartGame(selectedNumber)} />
        </Card>

    
    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.container} >
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.input}>
                <Text>Select a Number</Text>
                <Input style={styles.txt}
                    blurOnSubmit 
                    autoCapitilize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}  
                    onChangeText={enteredValueHandler}
                    value={enteredValue}
                    />
                <View style={styles.btns}>
                    <View style={styles.buttons}>
                        <Button onPress={resetInputHandler} color={Colors.primary} title="Reset"/>
                    </View>
                    <View style={styles.buttons}>
                        <Button  onPress={confirmInputHannlder}  color={Colors.primary} title="Confirm"/>
                    </View>
                </View>
            </Card>
            {choiceOutput}
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        paddingTop:50,
    },
    title:{
        fontSize:22,
        marginBottom:50,
    },
    txt:{
        width:75,
        textAlign:"center",
    },
    input:{
        height:200,
        width:300,
        maxWidth:"80%",
        alignItems:"center",
        justifyContent:"center",
    },
    btns:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        paddingHorizontal:25,
        marginVertical:20
    },
    buttons:{
        width:100,
    },
    choice:{
        marginVertical:20,
        alignItems:"center",
        borderRadius:3,
        padding:20,
        
    },
    choiceText:{
        color:Colors.primary,
    },
})