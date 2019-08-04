import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import BackLink from './BackLink';

class Inputs extends Component {
    state = { email: '', password: '' }

    handleEmail = (text) => this.setState({ email: text })
    handlePassword = (text) => this.setState({ password: text })
    login = () => alert( 'email: ' + this.state.email + ' password: ' + this.state.password )

    render() {
        return (
            <View>
                <BackLink />
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        
                        placeholder="Email"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={this.handleEmail}
                    />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Password"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={this.handlePassword}
                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={this.login}
                    >
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 24
    },
    input: {
        height: 40,
        margin: 15,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        height: 40,
        padding: 10,
        margin: 15,
        backgroundColor: '#7a42f4'
    },
    submitButtonText: {
        color: 'white'
    }
});

export default Inputs;