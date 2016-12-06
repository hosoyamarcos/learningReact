import React from 'react'
import {Link} from 'react-router'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <header>
                    <h1>App page</h1>
                    <nav>
                        <Link to="/home" >Home</Link>
                        <Link to="/about" >About</Link>
                    </nav>
                    {this.props.children}
                </header>

                <footer>
                    The footer
                </footer>
            </div>
        )
    }

}