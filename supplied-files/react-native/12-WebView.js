import React, { Component } from 'react';
import { View, ScrollView, WebView, StyleSheet } from 'react-native';
import BackLink from './BackLink';

class MyWebView extends Component {
    render() {
        return (
            <View>
                <BackLink />
                <View style={styles.container}>
                    <WebView source={{ uri: 'https://www.digdeeper.in' }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 350
    }
})

export default MyWebView;