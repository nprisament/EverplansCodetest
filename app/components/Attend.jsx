const React = require('react');
import { Row, Col, Button } from 'react-bootstrap';

const Person = require('Person');

module.exports = React.createClass({
  render() {
    const {people} = this.props;
    const noResponse = people.filter((person) => {
      return person.response == false;
    });
    const respond = people.filter((person) => {
      return person.response == true;
    });
    const coming = respond.filter((person) => {
      return person.coming == true;
    });
    const notComing = respond.filter((person) => {
      return person.coming == false;
    });

    const renderPeople = (array) => {
      return array.map((person) => {
        return (
          <Person key={person.id} {...person}/>
        );
      });
    };

    return (
      <Col xs={12} sm={8}>
        <div className="coming">
          <h4>
            <div className="pull-left">
              Who's Coming ({coming.length})
            </div>
            <div className="pull-right">
              <Button onClick={this.props.onInvite}>Invite More People</Button>
            </div>
          </h4>
        </div>
        <Row>
            {renderPeople(coming)}
        </Row>
        <br/>
        <div className="not-coming">
          <h4>Not Coming ({notComing.length})</h4>
        </div>
          <Row>
            {renderPeople(notComing)}
          </Row>
        <br/>
        <div className="no-response">
          <h4>No Response Yet ({noResponse.length})</h4>
        </div>
        <Row>
          {renderPeople(noResponse)}
        </Row>      
      </Col>
    );
  }
});