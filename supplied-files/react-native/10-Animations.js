import React, { Component } from 'react';
import { View, Animated, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackLink from './BackLink';

class Animations extends Component {
    state = {
        animatedWidth: new Animated.Value( 50 ),
        animatedHeight: new Animated.Value( 100 )
    };

    animatedBox = () => {
        Animated.timing( this.state.animatedWidth, {
            toValue: 200,
            duration: 1000
        }).start();
        Animated.timing( this.state.animatedHeight, {
            toValue: 100,
            duration: 1000
        }).start();
    }

    render() {
        const animatedStyles = {
            width: this.state.animatedWidth,
            height: this.state.animatedHeight
        };

        return (
            <View>
                <BackLink />
                <TouchableOpacity onPress={this.animatedBox} style={styles.container}>
                    <Animated.View style={ { ...styles.box, ...animatedStyles } }>
                        <Text style={styles.text}>Hi</Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 100,
        height: 50,
        padding: 10,
        backgroundColor: 'blue'
    },
    text: {
        color: 'white'
    }
});

export default Animations;