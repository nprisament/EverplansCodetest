const React = require('react');
const ReactDOM = require("react-dom");
import { Row, Col, Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const InviteModal = React.createClass({
  saveInfo(){
    const {people} = this.props;
    const cloneOfEvent = JSON.parse(JSON.stringify(people));
    let newData = {
      people: cloneOfEvent
    };
    if (ReactDOM.findDOMNode(this.refs.name).value && ReactDOM.findDOMNode(this.refs.name).value.length > 0 && ReactDOM.findDOMNode(this.refs.name2).value && ReactDOM.findDOMNode(this.refs.name2).value.length == 1) {
      newData.people.push({
        id: people.length + 1,
        firstName: ReactDOM.findDOMNode(this.refs.name).value, 
        lastInitial: ReactDOM.findDOMNode(this.refs.name2).value, 
        guestsNum: 0, 
        pictureAddress: 'avatar.png',
        response: false,
        coming: false
      });
      this.props.onSave(newData);
      this.props.onHide();
    }
  },
  render() {
    return (
      <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Invite a New Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <FormGroup controlId="formName">
              <ControlLabel>Person's Name</ControlLabel>
              <Row>
                <Col xs={8}>
                  <FormControl type="text" placeholder="First Name" bsSize="sm" ref="name"/>
                </Col>
                <Col xs={4}>
                  <FormControl type="text" placeholder="Last Initial" bsSize="sm" ref="name2"/>
                </Col>
              </Row>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.saveInfo}>Save</Button><Button onClick={this.props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

module.exports = InviteModal;