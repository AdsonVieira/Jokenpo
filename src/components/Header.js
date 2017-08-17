
import React, { Component } from 'react';
import {
  View, 
  Image,
} from 'react-native';
class Header extends Component{
    render(){
      return(
        <View>
          <Image source={require('../../img/jokenpo.png')} />
        </View>
      );
    }
}

export default Header;