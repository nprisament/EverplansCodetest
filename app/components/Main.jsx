const React = require('react');
const {Route, Switch} = require('react-router-dom');
import { Grid, Row } from 'react-bootstrap';

const EventModal = require('EventModal');
const InviteModal = require('InviteModal');
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
      people: [
        {
          id: 1,
          firstName: 'Warren', 
          lastInitial: 'H', 
          guestsNum: 2, 
          pictureAddress: 'Warren.jpg',
          response: true,
          coming: true
        }, 
        {
          id: 2,
          firstName: 'Warren', 
          lastInitial: 'H', 
          guestsNum: 1, 
          pictureAddress: 'Warren.jpg',
          response: true,
          coming: true
        },
        {
          id: 3,
          firstName: 'Warren', 
          lastInitial: 'H', 
          guestsNum: 3, 
          pictureAddress: 'Warren.jpg',
          response: true,
          coming: true
        },
        {
          id: 4,
          firstName: 'Warren', 
          lastInitial: 'H', 
          guestsNum: 0, 
          pictureAddress: 'Warren.jpg',
          response: true,
          coming: false
        },
        {
          id: 5,
          firstName: 'Warren', 
          lastInitial: 'H', 
          guestsNum: 0, 
          pictureAddress: 'Warren.jpg',
          response: true,
          coming: false
        },
        {
          id: 6,
          firstName: 'Warren', 
          lastInitial: 'H', 
          guestsNum: 0, 
          pictureAddress: 'Warren.jpg',
          response: false,
          coming: true
        },
      ],
      eventModalShow: false,
      inviteModalShow: false
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
  handleInviteModalShow() {
    this.setState({inviteModalShow: true});
  },
  handleInviteModalClose() {
    this.setState({inviteModalShow: false});
  },
  handleInviteModalSave(newEvent) {
    this.setState(newEvent);
  },
  render() {
    const {event, people} = this.state;
    const AttendWrapper = React.createClass({
      render() {
        return (
          <Attend people={people}/>
        );
      }
    });
    return (
      <Grid>
        <EventModal show={this.state.eventModalShow} onHide={this.handleEventModalClose} onSave={this.handleEventModalSave} event={event}/>
        <InviteModal show={this.state.inviteModalShow} onHide={this.handleInviteModalClose} onSave={this.handleInviteModalSave} people={people}/>
        <Header/>
        <Event onEditEvent={this.handleEventModalShow} {...event}/>
        <Navigation activities={5}/>
        <Row>
          <div className="large">
            <Attend onInvite={this.handleInviteModalShow} people={people}/>
            <Activities/>
          </div>
          <div className="small">
            <Switch>
              <Route exact path="/" component={AttendWrapper}/>
              <Route exact path="/activities" component={Activities}/>    
            </Switch>
          </div>
        </Row>
      </Grid>
    );
  }
});