import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackLink from './BackLink';

export default class Counter extends Component {
    state = {
        counter: 0
    };

    increment = () => this.setState(curState => ({ counter: curState.counter + 1 }));
    decrement = () => this.setState(curState => ({ counter: curState.counter - 1 }));

    render() {
        const { counter } = this.state;

        return (
            <View>
                <BackLink />
                <View style={styles.container}>
                    <Text style={styles.textLarge}>Counter is {counter}</Text>
                    <Text onPress={this.increment} style={styles.textLarge}>+</Text>
                    <Text onPress={this.decrement} style={styles.textLarge}>-</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textLarge: {
        fontSize: 30,
    }
});
