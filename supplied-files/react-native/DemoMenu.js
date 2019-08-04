import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

class DemoMenu extends Component {
    render() {
        return (
            <View style={styles.demoMenu}>
                <ScrollView>
                    <View>
                        <Link to="/counter" style={styles.item}>
                            <Text style={styles.link}>Counter</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/flexbox" style={styles.item}>
                            <Text styles={styles.item}>Flexbox</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/list" style={styles.item}>
                            <Text styles={styles.item}>List</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/inputs" style={styles.item}>
                            <Text styles={styles.item}>Inputs</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/scrollview" style={styles.item}>
                            <Text styles={styles.item}>ScrollView</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/image" style={styles.item}>
                            <Text styles={styles.item}>Image</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/http" style={styles.item}>
                            <Text styles={styles.item}>HTTP</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/button" style={styles.item}>
                            <Text styles={styles.item}>Button</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/touchableopacity" style={styles.item}>
                            <Text styles={styles.item}>TouchableOpacity</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/animations" style={styles.item}>
                            <Text styles={styles.item}>Animations</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/routing" style={styles.item}>
                            <Text styles={styles.item}>Routing</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/webview" style={styles.item}>
                            <Text styles={styles.item}>WebView</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/modal" style={styles.item}>
                            <Text styles={styles.item}>Modal</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/alert" style={styles.item}>
                            <Text styles={styles.item}>Alert</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/activityindicator" style={styles.item}>
                            <Text styles={styles.item}>Activity Indicator</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/picker" style={styles.item}>
                            <Text styles={styles.item}>Picker</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/statusbar" style={styles.item}>
                            <Text styles={styles.item}>Status Bar</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/geolocation" style={styles.item}>
                            <Text styles={styles.item}>Geolocation</Text>
                        </Link>
                    </View>
                    <View>
                        <Link to="/asyncstorage" style={styles.item}>
                            <Text styles={styles.item}>AsyncStorage</Text>
                        </Link>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    demoMenu: {
        marginTop: 50
    },
    item: {
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
});

export default DemoMenu;