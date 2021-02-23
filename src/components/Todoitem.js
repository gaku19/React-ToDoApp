import React, { Component } from 'react';
import propTypes from "prop-types";
import Todos from './Todos';

export class Todoitem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ?   
            "line-through" : "none", 
            background: "#f4f4f4", 
            padding: "10px",
            borderBottom: "1px #ccc dotted", 
            textAlign: "center"
        }
    }

    markComplete = () => {
        console.log(this.props);
    }


    render() {
        const { id, title } = this.props.todo; // * destructuring the this.props.todo so that you dont have to repeat
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo: propTypes.object.isRequired
}

const btnStyle = {
    background: "#ff0000", 
    color: "#fff", 
    border: "none", 
    padding: "5px 8px", 
    borderRadius: "50%",
    cursor: "pointer", 
    float: "right"
}

export default Todoitem


//aif the todo is completed. 
//props in methods 

