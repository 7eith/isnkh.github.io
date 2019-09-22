/* eslint-disable react/react-in-jsx-scope */

/* ******************************************************************** */
/*                                                                      */
/*   [snkh.me] MenuButton.jsx                                           */
/*                                                                      */
/*   Author: Snkh <inquiries@snkh.me>                                   */
/*                                                                      */
/*   Created: 30/08/2019 23:36:49 by Snkh                               */
/*   Updated: 30/08/2019 23:38:32 by Snkh                               */
/*                                                                      */
/*   Snkh Inc. (c) 2019 - GPL 3.0                                       */
/*                                                                      */
/* ******************************************************************** */

import React from 'react';

class MenuButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      color: this.props.color? this.props.color:'black',
    }
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({
        open:nextProps.open
      });
    }
  }
  
  handleClick(){
    this.setState({
      open:!this.state.open
    });
  }
  
  render(){
    return(
        <div onClick={this.props.onClick ? this.props.onClick: ()=> {this.handleClick();}}>
          <div style={{...styles.line,...styles.lineTop}}/>
          <div style={{...styles.line,...styles.lineMiddle}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
        </div>
        )
      }
    }
    
    export default MenuButton;