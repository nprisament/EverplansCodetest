const React = require('react');
import { Col } from 'react-bootstrap';

import avatar from '../assets/images/avatar.png';

module.exports = React.createClass({
  render() {
    const {firstName, lastInitial, guestsNum, pictureAddress, coming, response} = this.props;
	  const guests = () => {
		  if(coming == true && response == true){
        if(guestsNum == 1){
          return <span className="guests">+{guestsNum} guest</span>;
        }else{
          return <span className="guests">+{guestsNum} guest</span>;
        }
      }else{
        return "";
      }
	  }; 
    return (
      <Col xs={3} className="cell-box">
      	<img src={avatar} alt={firstName}/>
      	<div>
      		<span className="name">{firstName} {lastInitial}.</span>
          {guests()}
      	</div>
      </Col>
    );
  }
});