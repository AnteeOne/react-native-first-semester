import React, {useState} from 'react'
import {Button, ScrollView, Text, TextInput, View} from 'react-native'
import CheckBox from 'expo-checkbox'
import {observer} from 'mobx-react-lite'
import Todo from "./src/store/todos/todo";

// оборачиваем компонент в observer для отслеживания изменений в сторе Mobx
const App = observer(() => {
    // создаем хух состояния для инпута
    const [text, setText] = useState('')

    return (
        <ScrollView>
            {/* Создаем поле для ввода текста задачи */}
            <TextInput style={{height: 40}} placeholder="Create" onChangeText={t => setText(t)} defaultValue={text}/>
            {/* Создаем кнопку создания задачи и на onPress вешаем функцию создания задачи в сторе Mobx */}
            <Button title="Add Todo" onPress={() => Todo.createTodo({id: Math.random(), title: text})}/>
            {/* Создаем список задач, где получаем их из стора Mobx */}
            {Todo.todos.map(({id, title, completed}) => (
                <View
                    style={{
                        flexDirection: 'row',
                        width: 350,
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                    key={id}
                >
                    {/* Создаем CheckBox выполнения задачи и на onPress вешаем функцию выполнения задачи в сторе Mobx */}
                    <CheckBox value={completed} onValueChange={() => Todo.completeTodo(id)}/>
                    <Text>{title}</Text>
                    {/* Создаем кнопку удаления задачи и на onPress вешаем функцию удаления задачи в сторе Mobx */}
                    <Button title="Delete" onPress={() => Todo.deleteTodo(id)}/>
                </View>
            ))}
        </ScrollView>
    )
})

export default App