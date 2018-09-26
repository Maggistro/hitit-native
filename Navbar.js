import React from 'react';
import {Button, View} from "react-native";

class Navbar extends React.Component{
    render(){
        return (
            <View>
                <Button onPress={() => this.props.startGame()} title="Start game">
                </Button>
                <Button onPress={() => this.props.resetGame()} title="Reset game">
                </Button>
                <Button onPress={() => this.props.endGame()} title="End game">
                </Button>
            </View>
        )
    }
}

export default Navbar;