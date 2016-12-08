import React from 'react'
import ReactDOM from 'react-dom'

import {Actions} from './actions/app-actions.js'
import {TodoStore} from './stores/count-store.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: TodoStore.getCount()
        }
        this.increment = this.increment.bind(this)
        this.decline = this.decline.bind(this)
        this._onChange = this._onChange.bind(this)
    }

    increment () {
        Actions.incrementCount()
    }

    decline () {
        Actions.declineCount()
    }

    componentDidMount () {
        TodoStore.addChangeListener(this._onChange)
    }

    componentWillUnmount () {
        TodoStore.removeChangeListener(this._onChange)
    }

    _onChange () {
        this.setState({
            count: TodoStore.getCount()
        })
    }

    render() {
        return(
            <div>
                <p>Hello world</p>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment} >Add</button>
                <button onClick={this.decline} >Subtract</button>
            </div>
        )
    }

}


ReactDOM.render(<App/>, document.getElementById('app'));
