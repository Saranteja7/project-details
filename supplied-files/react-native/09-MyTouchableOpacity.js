import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import BackLink from './BackLink';

class MyTouchables extends Component {
    handlePress = () => {
        alert( 'button pressed' );
        return false;
    }

    render() {
        return (
            <View>
                <BackLink />
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.handlePress}>
                        <Text style={styles.text}>Button</Text>
                    </TouchableOpacity>
                    <TouchableHighlight onPress={this.handlePress}>
                        <Text style={styles.text}>Button</Text>
                    </TouchableHighlight>
                    <TouchableNativeFeedback onPress={this.handlePress}>
                        <Text style={styles.text}>Button</Text>
                    </TouchableNativeFeedback>
                    <TouchableWithoutFeedback onPress={this.handlePress}>
                        <Text style={styles.text}>Button</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'red'
    }
})

export default MyTouchables;