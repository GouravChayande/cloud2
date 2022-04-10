import React, {useState} from "react"
import {FormGroup, Input, InputGroup, Button, InputGroupAddon, Form} from "reactstrap"

import {v4} from "uuid"

const TodoForm = ({addTodos}) => {
    const [todoString, setTodoString]  = useState("")

    const handleSubmit = (e) => {
            e.preventDefault()
            if(todoString === ""){
                return alert("ENTER VALUE FIRST")
            }

            const todo = {
                todoString,
                id: v4()
            }
            addTodos(todo)
            setTodoString("")
    }
    return(
    <Form>
        <FormGroup>
            <InputGroup>
                <Input 
                type = "text"
                name = "todo"
                id = "todo"
                placeholder = "Enter text"
                value = {todoString}
                onChange = {(e) => {setTodoString(e.target.value)}}
                />
                <InputGroupAddon addonType = "prepend">
                    <Button color = "success" 
                    onClick = {handleSubmit}>
                            ADD ELEMENT
                    </Button>
                </InputGroupAddon>
                
            </InputGroup>
        </FormGroup>
    </Form>)
}

export default TodoForm