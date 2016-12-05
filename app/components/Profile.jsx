import React from 'react'

// export default class Profile extends React.Component {
//     render() {
//         let objects = this.props.objects.map(object => {
//             return (
//                 <li>{object}</li>
//             )
//         })
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//                 <p>{this.props.age}</p>
//                 <ul>
//                     {objects}
//                 </ul>
//             </div>
//         )
//     }
// }


let Profile = props => (
    <div>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <ul>
            {props.objects.map( object => <li>{object}</li>)}
        </ul>
    </div>
)

export default Profile
