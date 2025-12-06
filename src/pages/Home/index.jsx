import {Component} from "react";

class HomePage extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>hello from the Home Page</h1>
                <h2>what's up {this.props.name} and now status {this.props.status}</h2>
            </div>
        )
    }
}

export default HomePage;