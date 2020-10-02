import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';



class CompleteScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CompleteScreen</Text>
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

export default CompleteScreen;