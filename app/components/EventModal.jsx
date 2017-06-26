const React = require('react');
const ReactDOM = require("react-dom");
import { Row, Col, Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const EventModal = React.createClass({
  saveInfo(){
    const {event} = this.props;
    const cloneOfEvent = JSON.parse(JSON.stringify(event));
    let newData = {
      event: cloneOfEvent
    };
    if (ReactDOM.findDOMNode(this.refs.name).value && ReactDOM.findDOMNode(this.refs.name).value.length > 0) {
      newData.event.eventName = ReactDOM.findDOMNode(this.refs.name).value;
    }
    if (ReactDOM.findDOMNode(this.refs.line1).value && ReactDOM.findDOMNode(this.refs.line1).value.length > 0) {
      newData.event.addressLine1 = ReactDOM.findDOMNode(this.refs.line1).value;
    }
    if (ReactDOM.findDOMNode(this.refs.line2).value && ReactDOM.findDOMNode(this.refs.line2).value.length > 0) {
      newData.event.addressLine2 = ReactDOM.findDOMNode(this.refs.line2).value;
    }
    if (ReactDOM.findDOMNode(this.refs.line3).value && ReactDOM.findDOMNode(this.refs.line3).value.length > 0) {
      newData.event.addressLine3 = ReactDOM.findDOMNode(this.refs.line3).value;
    }
    if (ReactDOM.findDOMNode(this.refs.dateStart).value && ReactDOM.findDOMNode(this.refs.dateStart).value.length > 0) {
      newData.event.startDate = ReactDOM.findDOMNode(this.refs.dateStart).value;
    }
    if (ReactDOM.findDOMNode(this.refs.dateEnd).value && ReactDOM.findDOMNode(this.refs.dateEnd).value.length > 0) {
      newData.event.endDate = ReactDOM.findDOMNode(this.refs.dateEnd).value;
    }
    if (ReactDOM.findDOMNode(this.refs.year).value && ReactDOM.findDOMNode(this.refs.year).value.length > 0) {
      newData.event.year = ReactDOM.findDOMNode(this.refs.year).value;
    }
    if (ReactDOM.findDOMNode(this.refs.description).value && ReactDOM.findDOMNode(this.refs.description).value.length > 0) {
      newData.event.description = ReactDOM.findDOMNode(this.refs.description).value;
    }
    if (ReactDOM.findDOMNode(this.refs.creators).value && ReactDOM.findDOMNode(this.refs.creators).value.length > 0) {
      newData.event.creators = ReactDOM.findDOMNode(this.refs.creators).value;
    }
    this.props.onSave(newData);
    this.props.onHide();
  },
  render() {
    return (
      <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <FormGroup controlId="formName">
              <ControlLabel>Event Name</ControlLabel>
              <FormControl type="text" placeholder="Enter New Event Name" ref="name"/>
            </FormGroup>
            <FormGroup controlId="formLocation">
              <ControlLabel>Location</ControlLabel>
              <FormControl type="text" placeholder="Enter New Adress Line 1" ref="line1"/>
              <FormControl type="text" placeholder="Enter New Adress Line 2" ref="line2"/>
              <FormControl type="text" placeholder="Enter New Adress Line 3" ref="line3"/>
            </FormGroup>
            <FormGroup controlId="formDates">
              <ControlLabel>Date Range</ControlLabel>
              <Row>
                <Col xs={4}>
                  <FormControl type="text" placeholder="Enter New Start Date" bsSize="sm" ref="dateStart"/>
                </Col>
                <Col xs={1}>
                  to
                </Col>
                <Col xs={4}>
                  <FormControl type="text" placeholder="Enter New End Date" bsSize="sm" ref="dateEnd"/>
                </Col>
                <Col xs={3}>
                  <FormControl type="text" placeholder="Enter New Year" bsSize="sm" ref="year"/>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup controlId="formDescription">
              <ControlLabel>Description</ControlLabel>
              <FormControl componentClass="textArea" placeholder="Enter New Description" ref="description"/>
            </FormGroup>
            <FormGroup controlId="formCreators">
              <ControlLabel>Creators</ControlLabel>
              <FormControl type="text" placeholder="Enter New Creators" ref="creators"/>
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

module.exports = EventModal;