import { text } from 'body-parser'
import React, { useState } from 'react'

function App() {
    const [task, setTask] = useState([])
    const [text, setText] = useState('')
    const addTask = () => {
    }
    return (
        <>
            <input type="text" placeholder='Add Task' onChange={text => setText(text)} />
            <button onSubmit={addTask}>add Task</button>
        </>
    )
}

export default App