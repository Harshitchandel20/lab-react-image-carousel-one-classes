import React, { Component } from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export class Button extends Component {

  render() {
    return (
        <div id="leftButton" onClick={()=> this.props.mode?this.props.handleClick("left"):this.props.handleClick("right")}>
        {this.props.mode=="left"?<ArrowBackIosIcon style={{color:"white", fontSize:"30px"}}/>: <ArrowForwardIosIcon style={{color:"white", fontSize:"30px"}} />}
        </div>
    )
  }
}


export default Button
