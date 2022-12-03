import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from "react-native/Libraries/NewAppScreen";
import {AntDesign} from '@expo/vector-icons';
import {Checkbox} from 'react-native-paper';
import {observer} from "mobx-react-lite";
import TodoStore, {Todo} from "./TodoStore";

const Stack = createNativeStackNavigator();

// very dirty, need data layer with repos e.t.c


const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Tasks"
                    component={TaskListScreen}
                    options={({navigation}) => ({
                        title: 'Tasks',
                        headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate('Completed')}
                                title="Completed"
                                color={Colors.blue}
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Completed"
                    component={CompletedTasksScreen}
                    options={({navigation}) => ({
                        title: 'Completed',
                        headerLeft: () => (
                            <Button
                                onPress={() => navigation.popToTop()}
                                title="Home"
                                color={Colors.blue}
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Details"
                    component={TaskDetailsScreen}
                    options={({navigation}) => ({
                        title: 'Details',
                        headerLeft: () => (
                            <Button
                                onPress={() => navigation.popToTop()}
                                title="Home"
                                color={Colors.blue}
                            />
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App

const TaskListScreen = observer((
    {navigation}: { navigation: any }
) => {
    const [text, setText] = useState('');
    const addTodo = () => {
        TodoStore.addTodo(text);
        setText('');
    };
    const checkTodo = (todo: Todo) => {
        TodoStore.checkTodo(todo)
    }

    const deleteTodo = (todo: Todo) => {
        TodoStore.deleteTodo(todo)
    }

    const keyExtractor = (index: number) => {
        return index.toString();
    };

    return <View style={styles.container}>
        <FlatList
            data={TodoStore.todos}
            keyExtractor={(item, index) => keyExtractor(index)}
            renderItem={({item}) => TodoComponent(
                item,
                (todoItem) => {
                    navigation.navigate('Details', {
                        item: item
                    })
                },
                (todoItem) => {
                    checkTodo(todoItem)
                },
                (todoItem) => {
                    deleteTodo(todoItem)
                }
            )}
        />
        <TextInput
            style={styles.textInput}
            onChangeText={newText => setText(newText)}
            value={text}>
        </TextInput>
        <Button
            title="Add"
            onPress={() => addTodo()}></Button>
        <StatusBar style="auto"/>
    </View>
})


const TodoComponent = (
    item: Todo,
    onClick: (todo: Todo) => void,
    setChecked: (todo: Todo) => void,
    deleteTodo: (todo: Todo) => void
) => {

    return <TouchableOpacity
        onPress={() => {
            onClick(item)
        }}
        style={styles.todoLineTouch}
    >
        <View style={styles.todoLine}>
            <View style={styles.todoLineTitle}>
                <Checkbox
                    color={Colors.blue}
                    uncheckedColor={Colors.black}
                    status={item.isDone ? 'indeterminate' : 'checked'}
                    onPress={() => {
                        setChecked(item);
                    }}
                />
                <Text style={{
                    marginHorizontal: 8,
                    textAlignVertical: 'center',
                    textDecorationLine: (item.isDone ? 'line-through' : 'none')
                }}>{item.title}</Text>
            </View>
            <TouchableOpacity onPress={() => {
                deleteTodo(item);
            }}>
                <AntDesign name="delete" size={24} color="black"/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
}

// @ts-ignore
const TaskDetailsScreen = ({route, navigation}) => {
    const {item} = route.params
    return <View style={styles.containerDetails}>
        <Text>
            {item.title}
        </Text>
    </View>
}

const CompletedTasksScreen = ({navigation}: { navigation: any }) => {
    const keyExtractor = (index: number) => {
        return index.toString();
    };
    return <View style={styles.container}>
        <FlatList
            data={TodoStore.todos.filter(value => {
                return value.isDone
            })}
            keyExtractor={(item, index) => keyExtractor(index)}
            renderItem={({item}) => TodoComponent(
                item,
                (todoItem) => {
                },
                (todoItem) => {
                },
                (todoItem) => {
                },
            )}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16
    },
    containerDetails: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#ffffff',
        padding: 16
    },
    todoLine: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: 'left',
        padding: 16
    },
    todoLineTitle: {
        flexDirection: "row"
    },
    todoLineTouch: {},
    textInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'rgba(185,185,185,0.6)',
        padding: 12,
    }
});
