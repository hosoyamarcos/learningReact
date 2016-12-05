import React from 'react'

export default class Profile extends React.Component {
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
