const React = require('react');
import { Row, Col, Button } from 'react-bootstrap';
import Banner from '../assets/banner.jpg';

module.exports = React.createClass({
  render() {
	const {eventName, addressLine1, addressLine2, addressLine3, startDate, endDate, year, description, creators} = this.props;
	let styles = {
            //backgroundImage: Banner,// + ' no-repeat center center fixed',
            backgroundSize: 'cover',
            overflow: 'hidden',
    };
    return (
		<Row style={styles}>
			<Col xs={12} className="event">
				<h1>{eventName} <Button onClick={this.props.onEditEvent}>Edit Info</Button></h1>
				<div className="address">
					{addressLine1}
					<br/>
					{addressLine2}
					<br/>
					{addressLine3}
				</div>
				<br/>
				<div className="dates">
					{startDate} - {endDate}, {year}				
				</div>
				<br/>
				<div className="description">{description}</div>
				<div className="creators">- {creators}</div>
			</Col>
		</Row>
    );
  }
});