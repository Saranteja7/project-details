import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import BackLink from './BackLink';

class MyAsyncStorage extends Component {
    state = {
        reviewer: ''
    };

    componentDidMount = () => {
        MyAsyncStorage.getItem( 'reviewer' )
            .then( value => {
                this.setState({
                    reviewer: value
                });
            })
            .catch(error=> console.log( error ));
    }

    updateReviewer = ( value ) => {
        MyAsyncStorage.setItem( 'reviewer', value )
            .then(value => console.log( value ))
            .catch(error => console.log( error ));
        
        this.setState({
            reviewer: value
        });
    }

    render() {
        return (
            <View>
                <BackLink />
                <View style={styles.container}>
                    <TextInput style={styles.input} onChangeText={this.updateReviewer} />
                    <Text>{this.state.reviewer}</Text>
                </View>
            </View>
        )
    }
}

export default MyAsyncStorage;

const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems: 'center',
       marginTop: 50
    },
    input: {
       margin: 5,
       height: 100,
       borderWidth: 1,
       backgroundColor: '#7685ed'
    }
});