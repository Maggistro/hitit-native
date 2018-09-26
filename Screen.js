import React from 'react';
import HitButton from './HitButton';
import {View, StyleSheet, Text} from "react-native";

class Screen extends React.Component{

    render(){
        let orbs = [];
        const screenContent =
            <View style={styles.screen}
                key="gameContent"
                ref={ (divElement) => this.props.sizeElement(divElement)}
                onClick={() => this.props.onMiss()}>
                {orbs}
            </View>;
        switch(this.props.state){
            //game not running
            case 0:
                orbs.push(<Text>You're not playing. Whats wrong?</Text>);
                break;
            //game paused (tricky)
            case 1:
                orbs.push(<Text>LAME!</Text>);
                break;
            //game running
            case 2:
                for(let i=0; i< this.props.buttons.length; i++){
                    let hitButton = this.props.buttons[i];
                    orbs.push(<HitButton
                        key={hitButton.count}
                        count= {hitButton.count}
                        onHit= {() => this.props.onHit(hitButton.count)}
                        toSlow= {() => this.props.toSlow(hitButton.count)}
                        top= {hitButton.top}
                        left= {hitButton.left}
                    />);
                }
                break;
            default: console.error('not a legit game state');
        }
        return (screenContent)
    }
}

const styles =  StyleSheet.create({
    screen: {
        height: 400,
        width: 200,
    }
})

export default Screen;