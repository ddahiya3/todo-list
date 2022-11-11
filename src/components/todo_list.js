import React, { useState } from 'react';
import TodoForm from './todo_form';
import Todo from './todo';

function TodoList() {

    let id = 0;
    const [todos, setTodos] = useState([]);

    const getId = () => {
        return id;
    }
    const updateId = () => {
        id += 1;
    }

    const addTodo = todo => {
        if (!todo.text) {
            return;
        }
        const newTodos = [...todos, todo];
        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
        <h2>TODO List</h2>
        <TodoForm onSubmit={addTodo} getId={getId} updateId={updateId}/>
        <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
        />
        </>
    );
}

export default TodoList;