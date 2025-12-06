import {Component, Fragment} from "react";
import Greeting from "../../components/Home/Greeting/Greeting";
import Countable from "../../components/Home/Countable";
import {Divider} from "@mui/material";

class HomePage extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Fragment>
                <Greeting />
                <Divider />
                <Countable />
            </Fragment>

        )
    }
}

export default HomePage;