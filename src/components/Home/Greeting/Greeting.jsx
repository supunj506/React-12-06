import {Component} from "react";
import {Typography} from "@mui/material";
import ijse_logo from "../../../assest/img/ijse@2x.png"
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";

class Greeting extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <Typography variant="h3" gutterBottom>
                        Hello GDSE
                    </Typography>
                </div>
                <div>
                    <img src = {ijse_logo}   alt={"Ijse Logo"}/>
                    
                </div>
                
            </div>)
    }
}

export default withStyles(styleSheet)(Greeting)