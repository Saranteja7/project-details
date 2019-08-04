import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import BackLink from './BackLink';

export default class FlexBoxes extends Component {
    render() {
        return (
            <View>
                <BackLink />
                <View style={styles.containerVertical}>
                    <View style={styles.redbox} />
                    <View style={styles.greenbox} />
                    <View style={styles.bluebox} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerVertical: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: 600
    },
    redbox: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    bluebox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    greenbox: {
        width: 100,
        height: 100,
        backgroundColor: 'green'
    },
});
