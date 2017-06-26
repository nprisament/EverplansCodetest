const React = require('react');
const {Route, Switch} = require('react-router-dom');
import { Grid, Row } from 'react-bootstrap';

const EventModal = require('EventModal');
const Header = require('Header');
const Event = require('Event');
const Navigation = require('Navigation');
const Attend = require('Attend');
const Activities = require('Activities');

module.exports = React.createClass({
  getInitialState() {
    return {
      event: {
        eventName: "The 2017 Johnson Family Reunion", 
        addressLine1: "Western Mountain Dude Ranch", 
        addressLine2: "Durango, Colorado",
        addressLine3: "", 
        startDate: "June 26", 
        endDate: "June 26",
        year: "2017", 
        description: "description", 
        creators: "Noah Prisament"
      },
      eventModalShow: false
    };
  },
  handleEventModalShow() {
    this.setState({eventModalShow: true});
  },
  handleEventModalClose() {
    this.setState({eventModalShow: false});
  },
  handleEventModalSave(newEvent) {
    this.setState(newEvent);
  },
  render() {
    const {event} = this.state;

    return (
      <Grid>
        <EventModal show={this.state.eventModalShow} onHide={this.handleEventModalClose} onSave={this.handleEventModalSave} event={event}/>
        <Header/>
        <Event onEditEvent={this.handleEventModalShow} {...event}/>
        <Navigation activities={5}/>
        <Row>
          <div className="large">
            <Attend/>
            <Activities/>
          </div>
          <div className="small">
            <Switch>
              <Route exact path="/" component={Attend}/>
              <Route exact path="/activities" component={Activities}/>    
            </Switch>
          </div>
        </Row>
      </Grid>
    );
  }
});