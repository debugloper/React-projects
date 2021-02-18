import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos }) {
    return (
        // maps each value in todos -> object todo passed to Todo in prop
        todos.map(todo => {
            // key is needed because everytime todo list changes, it will rerender everything
            // we only want to render the ones changed
            return <Todo key={todo.id} todo={todo} />
        })
    )
}
 