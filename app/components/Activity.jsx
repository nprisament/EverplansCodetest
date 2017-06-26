const React = require('react');
import { Row } from 'react-bootstrap';

module.exports = React.createClass({
  render() {
    const {name, month, day, hour, minutes, description} = this.props;
	  const getDate = () => {
		  if(hour > 12 && hour < 24){
        return month + " " + day + " at " + (hour - 12) + ":" + minutes + "pm";
      }else if(hour == 12){
        return month + " " + day + " at 12:" + minutes + "pm";
      }else if(hour == 24){
        return month + " " + day + " at 12:" + minutes + "am";
      }else{
        return month + " " + day + " at " + hour + ":" + minutes + "am";
      }
	  }; 
    return (
      <Row className="activity">
        <br/>
        <span className="activity-name">{name}</span>
        <br/>
        <span className="activity-name">{getDate()}</span>
        <br/>
        <span className="activity-name">{description}</span>
        <br/>
    	</Row>
    );
  }
});