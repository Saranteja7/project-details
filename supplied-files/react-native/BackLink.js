import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { View, Text, StyleSheet } from 'react-native';

class BackLink extends Component {
    render() {
        return (
            <View>
                <Link to="/" style={styles.back}>
                    <Text>Back</Text>
                </Link>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        height: 30,
        flexDirection: 'column',
        alignItems: 'stretch',
        flexGrow: 1,
        backgroundColor: 'olive'
    }
});

export default BackLink;