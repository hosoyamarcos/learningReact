import React from 'react'

import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

export default class App extends React.Component {
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

    addUser(newProfile) {
        console.log(newProfile)
        this.setState({
            people : this.state.people.concat([newProfile])
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
                <AddProfile addUser={this.addUser}/>
            </div>
        )
    }
}
