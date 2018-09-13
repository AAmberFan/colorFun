import React, { Component }  from 'react';
import '../index.css';
class Box extends Component{
    render(){
        const {color} = this.props;
        return(
            <div className="wrapper">
                <div className="box" style={{backgroundColor:`${color}` }} >
                    <button onClick={this.props.handleClick.bind(this)}>CHANGE COLOR</button>
                </div>
            </div>
        );
    }
}

export default Box;