/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
} from 'react-native';

import Header from './src/components/Header';
import Icone from './src/components/Icone';


class Jokenpo extends Component{

    constructor(props){
      super(props);

      this.state = {
          choiceUser:'',
          choiceComputer:'',
          result:'',
      }
    }

    jokenpo(action){
      this.setState({choiceUser:action})
      //alert(this.choiceComputer());

      var pc = this.choiceComputer();
    
      if(pc == 0){
        this.setState({choiceComputer:"Pedra"});
      }else if(pc == 1){
        this.setState({choiceComputer:"Papel"});
      }else{
        this.setState({choiceComputer:"Tesoura"});
      }

      if(pc == 0){
        if(action == "Pedra"){
          this.setState({result: 'Empate'});
        }
        if(action == "Papel"){
          this.setState({result: 'Você  ganhou'});
        }
        if(action == "Tesoura"){
          this.setState({result: 'Computador Ganhou'});
        }
      }
      if(pc == 1){
        if(action == "Pedra"){
          this.setState({result: 'Computador Ganhou'});
        }
        if(action == "Papel"){
          this.setState({result: 'Empate'});
        }
        if(action == "Tesoura"){
          this.setState({result: 'Você  ganhou'});
        }
      }
      if(pc == 2){
        if(action == "Pedra"){
          this.setState({result: 'Você ganhou'});
        }
        if(action == "Papel"){
          this.setState({result: 'Computador Ganhou'});
        }
        if(action == "Tesoura"){
          this.setState({result: 'Empate'});
        }
      }
    }

    choiceComputer(){
      return this.numberRandom();
    }

    numberRandom(){
      var number = Math.random();
      number = Math.floor(number*3);
      return number;
    }
    render(){
      return(
        <View>
          <Header></Header>
		  <View style={styles.show}>
				<Icone choice={this.state.choiceUser}  gamer='Você'> </Icone>
				
				<Icone choice={this.state.choiceComputer}  gamer='Computador'> </Icone>

				<Text style={styles.result}>{this.state.result}</Text>
		  </View>
       	 
          <View style={styles.ViewContent}>
			<View style={styles.btnChoice}>
				<Button
					title="Pedra"
					color="#4a148c"
					onPress={()=>  {this.jokenpo("Pedra")}}
				/>
			</View>

			<View style={styles.btnChoice}>
				<Button
					title="Papel"
					color="#0d47a1"
					onPress={()=> {this.jokenpo("Papel")}}
				/> 
			</View>

			<View style={styles.btnChoice}>
				<Button
					title="Tesoura"
					color="#33cc99"
					onPress={()=>  {this.jokenpo("Tesoura")}}
				/>
			</View>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
	ViewContent:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		paddingTop: 20,
		alignItems: 'flex-end'
	},
	btnChoice: {
		width: 110
	},
	show:{
		flexDirection: 'column',
		alignItems:'center',
		marginTop:20,
		height:270
	},
	result:{
		fontSize: 25,
		fontWeight: 'bold',
		color: 'red',
		height:60
	},
	ActionGamer:{
		alignItems:'center',
		marginBottom: 20
	}
});
AppRegistry.registerComponent('Jokenpo', () => Jokenpo);
