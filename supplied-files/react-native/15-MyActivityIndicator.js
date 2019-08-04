import React from 'react';
import { View, ActivityIndicator, Button, StyleSheet } from 'react-native';
import BackLink from './BackLink';

class MyActivityIndicator extends React.Component {
    state = {
        animating: true
    };

    toggleAnimating = () => {
        this.setState(curState => ({
            animating: !curState.animating
        }));
    }

    render() {
        return (
            <View>
                <BackLink />
                <Button color="#7a42f4" title="Toggle Activity" onPress={this.toggleAnimating} style={styles.button} />
                <View style={styles.container}>
                    <ActivityIndicator
                        animating={this.state.animating}
                        color="crimson"
                        size="large"
                        style={styles.activityIndicator}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 100
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        height: 80
    }
});

export default MyActivityIndicator;