import React from 'react';
import {View, StyleSheet} from "react-native";

class HitButton extends React.Component{

    constructor(props) {
        super(props);

        this.transitionEnd = this.transitionEnd.bind(this);
        this.mountStyle = this.mountStyle.bind(this);
        this.unMountStyle = this.unMountStyle.bind(this);

        this.state = {
            mounting: true,
            style: {
                transition:  'opacity '+ Math.floor((10000 - Math.sqrt(props.count))/2) + 'ms ease-in',
                opacity: 0,
            }
        }
    }

    render(){
        return (
            <View className='it' style={{left: this.props.left, top: this.props.top}} id={this.props.count} key={this.props.count}>
                <View onPress={(event) => {event.stopPropagation(); this.props.onHit()}} style={this.state.style} onTransitionEnd={this.transitionEnd}>
                </View>
            </View>
        )
    }

    unMountStyle() { //css for unmount animation
        this.setState({
            style: {
                transition:  'opacity '+ Math.floor((10000 - Math.sqrt(this.props.count))/2) + 'ms ease-in',
                opacity: 0,
            }
        });
    }

    shouldComponentUpdate(nextProps, nextState) { //check for the mounted props
        if(!nextState.mounting) {
            Object.assign(nextState, {
                style: {
                    transition: 'opacity ' + Math.floor((10000 - Math.sqrt(this.props.count)) / 2) + 'ms ease-in',
                    opacity: 0,
                }
            })
        }
        return true;
    }


    mountStyle() {
        this.setState({
            style: {
                transition:  'opacity '+ Math.floor((10000 - Math.sqrt(this.props.count))/2) + 'ms ease-in',
                opacity: 1,
            }
        });
    }

    transitionEnd(){
        this.setState({
            mounting: false
        })
    }

    componentDidMount(){
        this.props.toSlow();
        setTimeout(this.mountStyle, 10);
    }
}

const styles = StyleSheet.create({
    it: {
        height: 20,
        width: 20,
        position: 'absolute',
        overflow: 'visible',
        borderRadius: 10,
    },
    itDiv: {
        height: 20,
        width: 20,
        opacity: 0,
        overflow: 'visible',
        backgroundColor: 'black',
        borderRadius: 10,
    }
});

export default HitButton;