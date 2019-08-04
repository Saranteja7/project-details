import React, { Component } from 'react';
import { View, Alert, StyleSheet, TouchableHighlight, Text } from 'react-native';
import BackLink from './BackLink';

class MyAlert extends Component {
    showAlert() {
        Alert.alert( 'Confirm', 'Are you sure you want to do this?', [
            { text: 'Cancel', onPress: () => console.log( 'cancel pressed' ) },
            { text: 'OK', onPress: () => console.log( 'ok pressed' ) }
        ]);
    }
    
    render() {
        return (
            <View>
                <BackLink />
                <View style={styles.container}>
                    <TouchableHighlight onPress={this.showAlert}>
                        <Text style={styles.text}>Show Alert</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 100
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    }
});

export default MyAlert;