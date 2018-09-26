import {Button, View} from "react-native";
import React from 'react';


class Menu extends React.Component{

    render(){
        return (
            <View className="menu">
                <Button onPress={() => this.props.switch('GAME')} title="Play">
                </Button>
                <Button onPress={() => this.props.switch('HIGHSCORE')} title="Highscore">
                </Button>
                <Button onPress={() => this.props.switch('CREDITS')} title="Credits">
                </Button>
            </View>
        );
    }
}

export default Menu;