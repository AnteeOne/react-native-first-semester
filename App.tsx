import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from "react-native/Libraries/NewAppScreen";
import {AntDesign} from '@expo/vector-icons';
import {Checkbox} from 'react-native-paper';

const Stack = createNativeStackNavigator();
let todosRepo: Todo[] = []

// very dirty, need data layer with repos e.t.c

export default function App() {

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

function TaskListScreen(
    {navigation}: { navigation: any }
) {
    const [todos, setTodos] = useState([...todosRepo]);
    const [text, setText] = useState('');
    const addTodo = () => {
        let newTodos = [...todos];
        let todo = new Todo(text, false)
        newTodos.push(todo);
        todosRepo.push(todo)

        setTodos(newTodos);
        setText('');
    };
    const checkTodo = (todo: Todo) => {
        let newTodos = todos.map(value => {
            if (value.title == todo.title) {
                return new Todo(
                    value.title,
                    !value.isDone
                )
            } else {
                return value
            }
        })
        todosRepo = newTodos
        setTodos(newTodos)
    }

    const deleteTodo = (todo: Todo) => {
        let newTodos = todos.filter(value => {
            return (value.title != todo.title)
        })
        todosRepo = newTodos
        setTodos(newTodos)
    }

    const keyExtractor = (index: number) => {
        return index.toString();
    };
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return <View style={styles.container}>
        <FlatList
            data={todos}
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
}

class Todo {
    title: string
    isDone: boolean

    constructor(title: string, isDone: boolean) {
        this.title = title
        this.isDone = isDone
    }
}

const TodoComponent = (
    item: Todo,
    onClick: (todo: Todo) => void,
    setChecked: (todo: Todo) => void,
    deleteTodo: (todo: Todo) => void
) => {

    return <TouchableOpacity
        onPress={() => {onClick(item)}}
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
function TaskDetailsScreen({route, navigation}) {
    const {item} = route.params
    return <View style={styles.containerDetails}>
        <Text>
            {item.title}
        </Text>
    </View>
}

function CompletedTasksScreen({navigation}: { navigation: any }) {
    const keyExtractor = (index: number) => {
        return index.toString();
    };
    return <View style={styles.container}>
        <FlatList
            data={todosRepo.filter(value => {return value.isDone})}
            keyExtractor={(item, index) => keyExtractor(index)}
            renderItem={({item}) => TodoComponent(
                item,
                (todoItem) => {},
                (todoItem) => {},
                (todoItem) => {},
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
