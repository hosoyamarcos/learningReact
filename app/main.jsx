import React from 'react'
import ReactDOM from 'react-dom'

class AnotherComponent extends React.Component {
    render() {
        return (
            <div>
                <p>another component</p>
            </div>
        )
    }
}

class MyComponent extends React.Component {
  render() {
    return(
        <div>
          <p>This is a component</p>
        </div>
    )
  }
}
class App extends React.Component {
  componentWillMount (){
    console.log('in componentWillMount')
  }

  componentDidMount () {
    console.log("in componentDidMount")
  }
  constructor(props) {
    super(props)
  }

  render() {
    console.log('in render')
    return (
        <div>
          <p>Hello world</p>
          <MyComponent>
              <AnotherComponent/>
          </MyComponent>
          <p>Hello </p>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
