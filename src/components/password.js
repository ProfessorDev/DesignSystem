import React from "react";
import classNames from "classnames";
import * as PropTypes from 'prop-types';
class PasswordField extends React.Component{
    state = {
      type: 'text',
    }
    
    
    handleClick = () => this.setState(({type}) => ({
      type: type === 'text' ? 'password' : 'text'
    }))
    
    
    render() {
      console.log(this.state);
      const { label } = this.props
      
      return (
        <label className="password">{label}
          <input type={this.state.type} />
          <span  onClick={this.handleClick}>{this.state.type === 'text' ? 'Hide' : 'Show'}</span>
        </label>
      )
    }
  }
  
  class ShowPassword extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        score: 'null'
      }
    }
    
   
    
    render(){
      return(
        <div>
        <PasswordField label="New Password" /><br></br>
        <PasswordField  label="Retype Password" />
        
        
        
          </div>
      )
    }
  }
export default ShowPassword;  