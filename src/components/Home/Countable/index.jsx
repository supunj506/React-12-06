import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Button, Typography} from "@mui/material";
import GDSEButton from "../../Common/Button";

class Countable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

    }

    increment() {
        this.setState({count:this.state.count+1})
    }

    decrement() {
        this.setState({count:this.state.count-1})
    }
    reset(){
        this.setState({count:0});
    }

    render() {
        return(
            <div>

                <Typography variant="h4" gutterBottom>
                    Count : {this.state.count}
                </Typography>
                {/*<Button variant="contained" onClick={()=>{( this.increment())}}>Increase !!!</Button>*/}
                {/*<Button variant="contained" onClick={()=>{(this.decrement())}} style={{marginLeft:"10px"}}>Decrease !!!</Button>*/}
                {/*<Button variant="contained" onClick={()=>{(this.reset())}} style={{marginLeft:"10px"}}>Reset    !!!</Button>*/}
                <GDSEButton
                    variant={"contained"}
                    color={"primary"}
                    onClick={() => {
                        this.increment()
                    }}
                    label={"Increment !!!"}
                    style={{marginLeft:"10px"}}
                ></GDSEButton>
                //git error check
                <GDSEButton
                    variant={"contained"}
                    color={"primary"}
                    onClick={() => {
                        this.decrement()
                    }}
                    label={"Decrement !!!"}
                    style={{marginLeft:"10px"}}
                ></GDSEButton>

                <GDSEButton
                    variant={"contained"}
                    color={"primary"}
                    onClick={() => {
                        this.reset()
                    }}
                    label={"reset !!!"}
                    style={{marginLeft:"10px"}}
                ></GDSEButton>

            </div>
        )
    }
}
export default withStyles(styleSheet)(Countable)