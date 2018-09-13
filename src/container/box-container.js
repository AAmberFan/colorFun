import React, { Component }  from 'react';
import Box from "../component/box";
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';

class BoxCon extends Component{
    render(){
        return(
            <Box handleClick={this.props.loadColor} color={this.props.color}/>
        );
    }
}
const mapStateToProps=(state)=>{
    return state;
};
export default connect(mapStateToProps,actionCreators)(BoxCon);