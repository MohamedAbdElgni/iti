
import React from "react";


class MyButton extends React.Component{

        constructor(props){
            console.log(props)
            super()
        }

        render(){
            // return(<button style={{"backgroundColor": "aqua", "color": this.props.colorFont}}> {this.props.btnname} </button>)

            return (<button className={`btn ${this.props.btnclass}`} onClick={this.props.fun}>{this.props.btnname} 
             </button>)
        }

}

export default MyButton;