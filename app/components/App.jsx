import React from 'react'

let HigherOrderComponent = (Component, starter) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: starter
        }
    }

    componentDidMount () {
        setInterval(() => {
            this.setState({
                count : this.state.count +1
            })
        },500)
    }

    render() {
        return (
            <Component {...this.props} {...this.state} />
        )
    }
}

class Comp1 extends React.Component {
    render () {
        return (
            <div>
                <p>Comp</p>
                {this.props.count}
            </div>
        )
    }
}
class Comp2 extends React.Component {
    render () {
        return (
            <div>
                <p>Comp</p>
                {this.props.count}
            </div>
        )
    }
}

let WrappedComp1 = HigherOrderComponent(Comp1, 0)
let WrappedComp2 = HigherOrderComponent(Comp2, 100)

export default class App extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <WrappedComp1/>
                <WrappedComp2/>
            </div>

        )
    }
}
