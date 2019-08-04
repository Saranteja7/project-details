import React from 'react';
import { View, Picker, Text, StyleSheet } from 'react-native';
import BackLink from './BackLink';

class MyPicker extends React.Component {
    state = {
        user: 'john'
    };

    constructor( props ) {
        super( props );

        console.log( 'picker::constructor' );
    }

    updateUser = ( user ) => {
        this.setState({ user });
    }

    render() {
        console.log( 'picker::render' );

        return (
            <View>
                <BackLink />
                <View style={styles.container}>
                    <Text style = {styles.text}>{this.state.user}</Text>
                    <Picker selectedValue={this.state.user} onValueChange={this.updateUser} style={styles.picker}>
                        <Picker.Item label="John" value="john" />
                        <Picker.Item label="Mary" value="mary" />
                        <Picker.Item label="David" value="david" />
                    </Picker>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    },
    picker: {
        height: 50,
        backgroundColor: 'lightblue'
    }
});

export default MyPicker;