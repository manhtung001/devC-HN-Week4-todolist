import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


class HomeScreen extends Component {
  state = {
    list: [
      {
        id: 1,
        status: 'Done',
        body: 'Read Instructions'
      },
      {
        id: 2,
        status: 'Done',
        body: 'Think a bit'
      },
      {
        id: 3,
        status: 'Done',
        body: "Google 'How to build todo app"
      },
      {
        id: 4,
        status: 'Done',
        body: 'Read results from Google'
      },
      {
        id: 5,
        status: 'Done',
        body: "Google 'How to build todo app using React Native"
      },
      {
        id: 6,
        status: 'Active',
        body: 'Read results from Google again'
      },
      {
        id: 7,
        status: 'Active',
        body: 'Spend some more time thinking'
      },
      {
        id: 8,
        status: 'Active',
        body: 'Use knowledge gained at CoderSchool to build new todo app'
      }
    ],
    valueInput: "",
    isShown: false
  };

  toggleStatus = (id, index) => {
    const { list } = this.state;
    const todo = list.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = list.findIndex(todo => todo.id === id);
    list[foundIndex] = todo;
    const newlist = [...list];
    this.setState({ list: newlist });
    setTimeout(() => {
      this.props.navigation.navigate("DetailScreen", { todo: todo, index: index })
    }, 500);

  }

  onDeleteTodo = item => {
    const { list } = this.state;
    const prompt = `"${item.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK', onPress: () => {
            const newlist = list.filter(todo => todo.id !== item.id);
            this.setState({ list: newlist });
          }
        }
      ],
      { cancelable: true }
    );
  };

  onsubmit = () => {
    const { list, valueInput } = this.state;
    const id = list[list.length-1].id + 1;
    const newTodo = {
      body: valueInput,
      status: 'Active',
      id: id
    };
    const newTodoList = [...list, newTodo];
    this.setState({
      list: newTodoList,
      valueInput: "",
      isShown: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          enabled={true}
          behavior="position"
        >
          <ScrollView>
            {this.state.list.map((item, index) =>
              <View
                style={[(item.status == "Active") ? styles.active : styles.done, styles.todoWrapper]}
                key={item.id}
              >
                <TouchableOpacity
                  onPress={() => this.toggleStatus(item.id, index)}
                  onLongPress={() => this.onDeleteTodo(item)}
                >
                  <Text style={styles.todoText}>{index + 1}. {item.body}</Text>
                </TouchableOpacity>
              </View>
            )}
            <TextInput
              value={this.state.valueInput}
              style={styles.todoInput}
              onChangeText={text => this.setState({ valueInput: text, isShown: true })}
            />
            {this.state.isShown && (
              <TouchableOpacity
                onPress={() => this.onsubmit()}
                disabled={this.state.valueInput ? false : true}
              >
                <View style={styles.subbmitBtn}>
                  <Text style={styles.subbmitText}>Submit</Text>
                </View>
              </TouchableOpacity>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
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
  todoInput: {
    width: '95%',
    minHeight: 30,
    // color: 'white',
    borderWidth: 1,
    marginTop: '20%',
    marginBottom: '5%',
    borderColor: 'grey'
  },
  todoWrapper: {
    paddingHorizontal: 20,
    marginVertical: 5,
    width: 300
  },
  active: {
    backgroundColor: "#7cd8ff"
  },
  done: {
    backgroundColor: "#00e142"
  },
  todoText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#292929",
    marginVertical: 5
  },
  subbmitBtn: {
    height: 40,
    width: 90,
    borderRadius: 10,
    backgroundColor: "#ff305a",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 150
  },
  subbmitText: {
    color: "#fff4f6",
    fontSize: 20,
    fontWeight: "600",
  }
});

export default HomeScreen;