import React from 'react'

export default class AddProfile extends React.Component {
    constructor(props){
        super (props)
        this.state = {
            name: '',
            age: '',
            object: ''
        }
       this.handleName = this.handleName.bind(this)
        this.handleAge = this.handleAge.bind(this)
        this.handleObjects = this.handleObjects.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleAge(e){
        this.setState({
            age: e.target.value
        })
    }
    handleObjects(e){
        this.setState({
            object: e.target.value
        })
    }
    handleClick (e) {
        let newProfile = {
            name: this.state.name,
            age: this.state.age,
            objects: [this.state.object]
        }
        this.props.addUser(newProfile)
    }

    render() {
        return (
            <div>
                <p>Add profile here</p>
                <input onChange={this.handleName} value={this.state.name}/>
                <input onChange={this.handleAge} value={this.state.age} />
                <input onChange={this.handleObjects} value={this.state.object} />
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}