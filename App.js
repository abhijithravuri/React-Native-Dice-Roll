import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Alert, Switch } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
constructor(){
  super();
    this.state={
      uri1: require('./src/imgs/dice1.png'),
      uri2: require('./src/imgs/dice1.png')

  }
}


randomNumber1=()=>{
  return(
    Math.floor((Math.random()*6)+1))
}
randomNumber2=()=>{
  return(
    Math.floor((Math.random()*6)+1))
  }
playButtonPressed=()=>{
// Alert.alert("hey"+this.randomNumber())
let diceNumber1 = this.randomNumber1()
let diceNumber2 = this.randomNumber2()

switch (diceNumber1) {
  case 1:
    this.setState({uri1: require('./src/imgs/dice1.png')})
    break;
    case 2:
    this.setState({uri1: require('./src/imgs/dice2.png')})
    break;
    case 3:
    this.setState({uri1: require('./src/imgs/dice3.png')})
    break;
    case 4:
    this.setState({uri1: require('./src/imgs/dice4.png')})
    break;
    case 5:
    this.setState({uri1: require('./src/imgs/dice5.png')})
    break;
    case 6:
    this.setState({uri1: require('./src/imgs/dice6.png')})
    break;
    

  default:this.setState({uri1: require('./src/imgs/dice1.png')})
    break;
    
}
switch (diceNumber2) {
  case 1:
    this.setState({uri2: require('./src/imgs/dice1.png')})
    break;
    case 2:
    this.setState({uri2: require('./src/imgs/dice2.png')})
    break;
    case 3:
    this.setState({uri2: require('./src/imgs/dice3.png')})
    break;
    case 4:
    this.setState({uri2: require('./src/imgs/dice4.png')})
    break;
    case 5:
    this.setState({uri2: require('./src/imgs/dice5.png')})
    break;
    case 6:
    this.setState({uri2: require('./src/imgs/dice6.png')})
    break;
    

  default:this.setState({uri2: require('./src/imgs/dice1.png')})
    break;
    
}


}

  render(){
  return (
    <View style={[styles.container]}>
      <Image
      style={styles.image1} 
      source={ this.state.uri1}/>
      <Image
      style={styles.image2} 
      source={ this.state.uri2}/>
      <TouchableOpacity 
      onPress={this.playButtonPressed}
      style={styles.button}>
      <Text style={styles.text}>
PLAY NOW!
</Text>
      </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:
  {marginTop: 35,
  //  backgroundColor: "#2B2B52",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFFFFF',

  },
  text: {
    color: "#FFFFFF",
    fontSize: 20
  },
  image1: {
    height: 200,
    width: 200
  },
  image2: {
    height: 200,
    width: 200,
  //  paddingVertical: 20,
   // paddingHorizontal: 50,
   // marginHorizontal: 50
  }
});
