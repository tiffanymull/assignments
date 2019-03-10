import React, {Component} from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class TodoProvider extends Component {
    constructor(){
        super()

        this.state = {
            todos: []
        }
    }

        getTodos = () => {
            axios.get('https://api.vschool.io/Tiffany/todo').then(response => {
                this.setState({
                    todos: response.data
                })
            })
        }

    render(){
        return (
            <div>
                class
            </div>
        )
    }
}

export default TodoProvider


// "https://api.vschool.io/Tiffany/todo"