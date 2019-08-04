import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BackLink from './BackLink';

class HttpExample extends Component {
    state = {
        data: ''
    }

    render() {
        return (
            <View>
                <BackLink />
                <View>
                    <Text>
                        {this.state.data.body}
                    </Text>
                </View>
            </View>
        )
    }
    
    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
export default HttpExample