import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import BackLink from './BackLink';

class MyImage extends Component {
    render() {
        return (
            <View>
                <BackLink />
                <ScrollView>
                    <Image source={require( "./images/lion-king.jpg" )} style={styles.image} />
                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNLFlbnpRLMWMzeHQz96WuefA23tk6l9NN21wMzPloR5oYPxtaQ"}} style={styles.image} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
});

export default MyImage;