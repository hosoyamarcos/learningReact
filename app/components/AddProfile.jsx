import React from 'react'

export default class AddProfile extends React.Component {
    render() {
        return (
            <div>
                <p>Add profile here</p>
                <button onClick={this.props.addUser}>Add User</button>
            </div>
        )
    }
}