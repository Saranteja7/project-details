import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import BackLink from './BackLink';

class MyScrollView extends Component {
    state = {
        items: [
            {'name': 'Ben', 'id': 1},
            {'name': 'Susan', 'id': 2},
            {'name': 'Robert', 'id': 3},
            {'name': 'Mary', 'id': 4},
            {'name': 'Daniel', 'id': 5},
            {'name': 'Laura', 'id': 6},
            {'name': 'John', 'id': 7},
            {'name': 'Debra', 'id': 8},
            {'name': 'Aron', 'id': 9},
            {'name': 'Ann', 'id': 10},
            {'name': 'Steve', 'id': 11},
            {'name': 'Olivia', 'id': 12}
        ]
    }

    render() {
        return (
            <View>
                <BackLink />
                <View>
                    <ScrollView>
                        {
                            this.state.items.map(item => (
                                <View style={styles.item} key={item.id}>
                                    <Text>{item.name}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
});

export default MyScrollView;