import { Component } from 'react';
import UserList from './UserList';
import Form from './Form';
import { useState } from 'react';

class App extends Component {

    state = {
        user_list: [
            {
                name: "Franklin",
                email: "habidasf@gmail.com",
                mobile: "6381394430"
            },
            {
                name: "Habi",
                email: "habi@gmail.com",
                mobile: "6381394430"
            }
        ]
    }

    removeUser = (index) => {
        const { user_list } = this.state;

        let filtered_user = user_list.filter((user, i) => {
            return i != index;
        })

        this.setState({ user_list: filtered_user })
    }

    render() {

        const { user_list } = this.state;
        return (
            <div className='container mt-4'>
                <h2>Add User</h2>
                <Form />
                <br />
                <h2>User List</h2>
                <UserList user_list={user_list} removeUser={this.removeUser} />
            </div>
        )
    }
}

export default App;
