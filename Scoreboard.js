import React from 'react';
import {Text, StyleSheet, View} from "react-native";

class Scoreboard extends React.Component {
    render() {
        return (
            <View style={styles.scoreBoard}>
                <Text>Score: {this.props.points}</Text>
                <Text> </Text>
                <Text>Level: {this.props.level}</Text>
                <Text>Streak: {this.props.streak}</Text>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    scoreBoard: {
        width: 200,
    }
});

export default Scoreboard;