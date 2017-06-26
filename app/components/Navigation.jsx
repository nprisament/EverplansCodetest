const React = require('react');
const {LinkContainer} = require('react-router-bootstrap');
import { Navbar, NavItem, Nav, Row } from 'react-bootstrap';

const Navigation = React.createClass({
	render(){
		return (
			<Row className="small">  
			    <Navbar>
			      <Nav bsStyle="tabs">
			        <LinkContainer exact to="/">
						<NavItem eventKey="1">Attendees</NavItem>
			        </LinkContainer>
			        <LinkContainer exact to="/activities">
						<NavItem eventKey="1">Activities {this.props.activities}</NavItem>
			        </LinkContainer>
			      </Nav>
			    </Navbar>
		  	</Row>
		);
	}
});

module.exports = Navigation;