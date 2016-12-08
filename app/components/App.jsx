import React from 'react'
import {incrementCount} from '../actions'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count : props.store.getState()
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.store.subscribe(this.handleChange)
    }

    handleChange () {
        this.setState({
            count : this.props.store.getState()
        })
    }

    handleClick () {
        this.props.store.dispatch(incrementCount())
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick} >Click me</button>
            </div>
        )
    }
}