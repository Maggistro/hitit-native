import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Menu from './Menu';
import Game from "./Game";
import Credits from "./Credits";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 'MENU'
        }
    }

    switchMain(target){
        this.setState({active: target});
    }

    render() {
        let active = this.state.active;
        return (
            <View>
                {active === 'MENU' ? (
                    <Menu switch={(t) => this.switchMain(t)}/>
                ) : active === 'GAME' ? (
                    <Game switch={(t) => this.switchMain(t)}/>
                ) : active === 'CREDITS' ? (
                    <Credits switch={(t) => this.switchMain(t)}/>
                ) : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flexed: {
      flex:1,
      flexDirection: 'column',
    },
    textInput: {
      flex: 2
    },
    translated: {
      flex:1
    }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);