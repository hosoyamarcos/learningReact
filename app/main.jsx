var React = require('react');
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <h1>Hello world</h1>
          <p>Hi there</p>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
