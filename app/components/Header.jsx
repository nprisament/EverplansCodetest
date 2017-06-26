const React = require('react');
import { Row, Col, Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';

const Header = React.createClass({
  render() {
    return (
		<Row>
			<Col className="pull-left vcenter">
				<img src={logo} alt="logo" className="vcenter"/>
			</Col>
			<Col className="pull-right" xs={3}>
				<Navbar>
					<Navbar.Brand>
						<img src={avatar} alt="avatar"/>		
					</Navbar.Brand>
					<Nav>
						<NavDropdown eventKey="1" title="Cameron" id="nav-dropdown">
        	  				<MenuItem eventKey="1.1">Settings</MenuItem>
    	      				<MenuItem eventKey="1.2">Logout</MenuItem>
	          			</NavDropdown>
					</Nav>
				</Navbar>
			</Col>	
		</Row>
    );
  }
});

module.exports = Header;