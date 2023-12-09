import { useState } from "react";
import { TodoItem } from "./Components/TodoItem";

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const createTodo = ()=> {
        setTodos([...todos, {text: inputValue, complete: true}])
        setInputValue("")
    }

    return (
        <div className="App">
            <div>
                <input type="text"
                    value = {inputValue}
                    onChange={(e)=> {
                    setInputValue(e.target.value)
                }} />
                <button onClick={createTodo}>Add</button>
            </div>
            <div>
                {
                    todos.map((el, id)=> {
                        return <TodoItem todo={el} key={id}/>
                    })
                }
            </div>

            {/* <TodoItem todo="todo" /> */}
        </div>
    );
}

export default App;
