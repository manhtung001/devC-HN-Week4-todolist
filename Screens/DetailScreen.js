import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

class DetailScreen extends Component {

    render() {
        const {params} = this.props.route;

        return (
            <View style={styles.container}>
               <View style={styles.textWrapper}>
               <Text style={styles.textStatus}>{params.index + 1}. </Text>
               <Text style={styles.textStatus}>{params.todo.status}</Text>
               </View>
               <Text>{params.todo.body}</Text>
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
    },
    textWrapper: {
        flexDirection: "row"
    },
    textStatus: {
        fontSize: 30,
        fontWeight: "600"
    }
});

export default DetailScreen;