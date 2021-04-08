import React from 'react'
import TodoList from './Todo/TodoList'
import AddTodo from "./Todo/AddTodo";
import Context from "./context";

function App() {
    let [Todos, setTodos] = React.useState([
            {id: 1, completed: false, title: 'Купить хлеб'},
            {id: 2, completed: true, title: 'Купить масло'},
            {id: 3, completed: false, title: 'Купить молоко'},
        ]
    )

    function toggleTodo(id) {
        setTodos(Todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    function removeTodo(id) {
    setTodos(Todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(Todos.concat([
            {
                title,
                id: Date.now(),
                completed: false,
            }
        ]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1>React tutorial</h1>
                <AddTodo onCreate={addTodo} />
                {Todos.length ? <TodoList todos={Todos} onToggle={toggleTodo}/> : <h1>You have no todo</h1>}
            </div>
        </Context.Provider>
    );
};

export default App;
 