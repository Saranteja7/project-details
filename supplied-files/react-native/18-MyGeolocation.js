import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackLink from './BackLink';

class MyGeolocation extends Component {
    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown',
    };

    watchID = null;

    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const initialPosition = JSON.stringify(position);
                this.setState({ initialPosition });
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            const lastPosition = JSON.stringify(position);
            this.setState({ lastPosition });
        });
    }

    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <View>
                <BackLink />
                <View style={styles.container}>
                    <Text style={styles.boldText}>
                        Initial position:
                    </Text>
                    <Text>
                        {this.state.initialPosition}
                    </Text>
                    <Text style={styles.boldText}>
                        Current position:
                    </Text>
                    <Text>
                        {this.state.lastPosition}
                    </Text>
                </View>
            </View>
        )
    }
}

export default MyGeolocation;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 50
    },
    boldText: {
        fontSize: 30,
        color: 'red',
    }
});