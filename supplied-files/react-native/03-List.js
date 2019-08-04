import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class List extends Component {
    announce = ( item ) => {
        alert( item.name );
    }

    render() {
        const { items } = this.props;
        return (
            <View>
            {
                items.map( item => (
                    <TouchableOpacity 
                        onPress={this.announce.bind( null, item )}
                        key={item.id}
                        style={styles.container}
                    >
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                ))
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    }
});
