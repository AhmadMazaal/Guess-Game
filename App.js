import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Header from './Components/Header.js'
import StartGameScreen from './Screens/StartGameScreen'
import GameScreen from './Components/GameScreen'
import GameOverScreen from './Screens/GameOverScreen'


export default function App() {
  const [userNumber,setUserNumber] = React.useState();
  const [guessRounds, setGuessRounds] = React.useState(0)

  const GameoverHandler = rounds => {
    setGuessRounds(rounds)
  }

  const startGameHandler = selectedNumber =>{
    setUserNumber(selectedNumber)
    setGuessRounds(0)


  }
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver = {GameoverHandler} />;
  }
  else if(guessRounds > 0){
    content = <GameOverScreen rounds = {guessRounds}/>
  }

  return (
    <View style={styles.container}>
      <View>
        <Header title="Guess Game" />
        {content}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
  },
});
