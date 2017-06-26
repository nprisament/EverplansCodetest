const React = require('react');
import { Col, Button } from 'react-bootstrap';

const Activity = require('Activity');

module.exports = React.createClass({
  getInitialState() {
    return {
      activities: [
        {
          id: 1,
          name: "Intership", 
          month: "June", 
          day: "26", 
          hour: 9, 
          minutes: 30, 
          description: "An intership at the company Everplans."
        },
        {
          id: 2,
          name: "Intership", 
          month: "June", 
          day: "26", 
          hour: 9, 
          minutes: 30, 
          description: "An intership at the company Everplans."
        },
        {
          id: 3,
          name: "Intership", 
          month: "June", 
          day: "26", 
          hour: 9, 
          minutes: 30, 
          description: "An intership at the company Everplans."
        },
        {
          id: 4,
          name: "Intership", 
          month: "June", 
          day: "26", 
          hour: 9, 
          minutes: 30, 
          description: "An intership at the company Everplans."
        },
        {
          id: 5,
          name: "Intership", 
          month: "June", 
          day: "26", 
          hour: 9, 
          minutes: 30, 
          description: "An intership at the company Everplans."
        }
      ]
    };
  },
  render() {
    const {activities} = this.state;
    const renderActivities = () => {
      return activities.map((activity) => {
        return (
          <Activity key={activity.id} {...activity}/>
        );
      });
    };

    return (
      <Col xs={12} sm={4}>
        <h4>
          <div className="pull-left">
            Activities
          </div>
          <div className="pull-right">
            <Button>Add</Button>
          </div>
        </h4>
        <div>
          {renderActivities()}
        </div>
      </Col>
    );
  }
});