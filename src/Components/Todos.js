import React from "react"
import {ListGroup, ListGroupItem} from "reactstrap"
import {FaTimes} from "react-icons/fa"

const Todos = ({todos, markComplete}) => (
    <ListGroup>
        {
            todos.map(todo => (
                <ListGroupItem key = {todo.id} style = {{margin:"5px"}}>
                    {todo.todoString}
                    <span className = "float-right" onClick = {() => {markComplete(todo.id)}}>
                        <FaTimes style = {{
                            color:"blue",
                            width:"20px",
                            height: "20px"
                        }} /></span>
                </ListGroupItem>
            ))
        }
    </ListGroup>
)
export default Todos