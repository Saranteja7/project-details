import React, { Component } from 'react';
import { View, Button } from 'react-native';
import BackLink from './BackLink';

class MyButton extends Component {
    handlePress = () => false

    render() {
        return (
            <View>
                <BackLink />
                <Button color="#7a42f4" title="Purple Button" onPress={this.handlePress} />
            </View>
        );
    }
}

export default MyButton;