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
  TextInput,
  View
} from 'react-native';

export default class FraktalisApp extends Component {
     constructor(props) {
        super(props);
        this.state = {text: ''};
      }

    render() {
        let pic = {
            uri: this.state.showPic ? 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' : 'http://sf1.viepratique.fr/wp-content/uploads/sites/5/2014/10/shutterstock_102978833.jpg'
        };
    return (
        <View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    backgroundColor: '#fda725',
    color: "#ccc",
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    flex: 4,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FraktalisApp', () => FraktalisApp);
