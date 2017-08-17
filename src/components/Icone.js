import React, { Component } from 'react';

import {  
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

class Icone extends Component{
	render(){
		
		if(this.props.choice == "Pedra"){
			return(
				<View style={styles.ActionGamer}>
					<Text>{this.props.gamer}</Text>
					<Image source={require('../../img/pedra.png')} />
				</View>
			);
		}else if(this.props.choice == "Papel"){
			return(
				<View style={styles.ActionGamer}>
					<Text>{this.props.gamer}</Text>
					<Image source={require('../../img/papel.png')} />
				</View>
			);
		}else if(this.props.choice == "Tesoura"){
			return(
				<View style={styles.ActionGamer}>
					<Text>{this.props.gamer}</Text>	
					<Image source={require('../../img/tesoura.png')} />
				</View>
			);
		}else{
			return false;
		}
	}
		
}

const styles = StyleSheet.create({
	ActionGamer:{
		alignItems:'center',
		marginBottom: 20
	}
});

export default Icone;