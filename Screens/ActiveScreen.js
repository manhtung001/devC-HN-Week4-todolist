import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 



class ActiveScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ActiveScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    }
});

export default ActiveScreen;