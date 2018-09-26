import React from 'react';
import {Button, Text, View} from "react-native";


class Credits extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            credits: 'Programming and Design: </br> Maximilian Mühlfeld'
        }
    }

    componentDidMount(){
        fetch('/credits')
            .then(res => {if(res.status !== 404) return res.json()})
            .then(credits => {if(credits) this.setState({credits: credits})})
    }

    render(){
        return (
            <View>
                <Text>{this.state.credits}</Text>
                <Button>Back to Menu</Button>
            </View>
        )
    }
}

export default Credits;