import React from "react";

export const TodoItem = ({todo})=> {
    return (
        <div className="todo-item">
            {todo.text}
            <button>Complete</button>
            <button>Delete</button>
        </div>
    )
}