import React from 'react'

class MyComponent extends React.Component {
    render () {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age} </p>
            </div>
        )
    }
}

MyComponent.propTypes = {
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired
}

MyComponent.defaultProps = {
    name : 'Myname',
    age: 0
}


export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <MyComponent name={'billy'} age={4}/>
            </div>

        )
    }
}
