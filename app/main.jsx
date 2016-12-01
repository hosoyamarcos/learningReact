var React = require('react');
import ReactDOM from 'react-dom'


var X = React.createClass({
  render: function () {
    return (
        <div>
          <p>Good  morning!</p>
        </div>
    )

  }
})

var Y = React.createClass({
  render: function () {
    return (
        React.createElement('p', {}, " I'm a 'p' element created by React createElement")
    )
  }
})


class Profile extends React.Component {
  render() {
    let objects = this.props.objects.map(object => {
      return (
          <li>{object}</li>
      )
    })
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.age}</p>
        <ul>
          {objects}
        </ul>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {name: "marcos" , age: '23', objects: ['pencil', 'eraser', 'pen']},
        {name: "bob", age: '21', objects: ['pencil', 'paperSheet', 'clip']}
      ]
    }
    this.addUser = this.addUser.bind(this)
  }

  addUser(e) {
    var person = {name: "billy" , age: '22', objects: ['cup', 'mouse', 'keyboard']}
    this.setState({
      people : this.state.people.concat([person])
    })
  }

  render() {
    let people = this.state.people.map(person => {
      return (
          <Profile
              name={person.name}
              age={person.age}
              objects={person.objects}
          />
      )

    })
    return (
        <div>
          {people}
          <button onClick={this.addUser}>Add User</button>
        </div>
    )
  }
}


// var App = React.createClass({
//   getInitialState: function () {
//     return {
//       people: [
//         {name: "marcos" , age: '23', objects: ['pencil', 'eraser', 'pen']},
//         {name: "bob", age: '21', objects: ['pencil', 'paperSheet', 'clip']}
//       ]
//     }
//   },
//   render: function () {
//     var person1 = this.state.people[0].name
//     return (
//       <div>
//         <h1>Hello world</h1>
//         <p>Hi there</p>
//         <X></X>
//         <Y></Y>
//         <p1>{person1}</p1>
//       </div>
//     )
//   }
// })

ReactDOM.render(<App />, document.getElementById('app'));
