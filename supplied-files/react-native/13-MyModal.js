import React, { Component } from 'react';
import { View, Modal, StyleSheet, TouchableHighlight, Text } from 'react-native';
import BackLink from './BackLink';

class MyModal extends Component {
    state = {
        visible: false
    }

    toggleModal( visible ) {
        this.setState({
            visible
        });
    }
    
    render() {
        return (
            <View>
                <BackLink />
                <View style={styles.container}>
                    <Modal 
                        animationType="slide"
                        transparent={false}
                        visible={this.state.visible}
                        onRequestClose={() => console.log( 'Modal has been closed' )}>
                        
                        <View style={styles.modal}>
                            <Text style={styles.text}>Modal is open</Text>
                            <TouchableHighlight onPress={() => this.toggleModal( !this.state.visible )}>
                                <Text style={styles.text}>Close modal</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>

                    <TouchableHighlight onPress={() => this.toggleModal( true )}>
                        <Text style={styles.text}>Open modal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 100
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7021a',
        padding: 100
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    }
});

export default MyModal;