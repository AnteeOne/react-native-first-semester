import {makeAutoObservable} from "mobx";

class TodoStore {
    todos: Array<Todo> = []

    // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
    constructor() {
        makeAutoObservable(this)
    }

    addTodo(text: string) {
        let todo = new Todo(text, false)
        this.todos.push(todo)
    };

    checkTodo(todo: Todo) {
        this.todos = this.todos.map(value => {
            if (value.title == todo.title) {
                return new Todo(
                    value.title,
                    !value.isDone
                )
            } else {
                return value
            }
        })
    }

    deleteTodo(todo: Todo) {
        this.todos = this.todos.filter(value => {
            return (value.title != todo.title)
        })
    }

}

export default new TodoStore()


export class Todo {
    title: string
    isDone: boolean

    constructor(title: string, isDone: boolean) {
        this.title = title
        this.isDone = isDone
    }
}