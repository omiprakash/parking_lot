import React from 'react';
import { createParkingLot, park, leave, status } from './utils/parkingUtil';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parkingLotSize: '',
      parkedCar: '',
      leftCar: '',
      status: ''
    }
  }

  handleChange = (e, name) => {
    if (name === 'create_parking') {
        // constant 6 is provided to create slot while can be taken as input
        const result = createParkingLot("6");
        this.setState({
          parkingLotSize: result
        })
    }
    if (name === 'park_car') {
        // constatn name is provided to park car while can be taken as input
        const result = park("ferrari");
        this.setState({
          parkedCar: result
        })
    }
    if (name === 'leave_car') {
        const result = leave(1);
        this.setState({
          leftCar: result
        })
    }

    if (name === 'status') {
        const result = status();
        this.setState({
          status: result
        })
    }
  }

/**
 * 
 * input field can be provide to get the details
 * radio button are not performing as expected i.e has to be selected one at a time. runnning out of time.
 * first status select throwing error as map function is used. error handling was required.
 */
  render(props) {
    const { parkedCar, parkingLotSize, leftCar, status } = this.state
    return (
      <React.Fragment>
        <div>
          <p>
            <input type="radio" id="create_parking" name="create_parking" value="create_parking_lot" onChange={e => { this.handleChange(e, 'create_parking') }} />
            <label htmlFor="create_parking">Create parking</label>
            <input type="radio" id="park_car" name="park_car" value="park" onChange={e => { this.handleChange(e, 'park_car') }} />
            <label htmlFor="park_car">park car</label>
            <input type="radio" id="leave_car" name="leave_car" value="leave" onChange={e => { this.handleChange(e, 'leave_car') }} />
            <label htmlFor="leave_car">leave car</label>
            <input type="radio" id="status" name="status" value="status" onChange={e => { this.handleChange(e, 'status') }} />
            <label htmlFor="status">status</label>
          </p>
          {parkedCar && parkedCar !== '' && <p>{parkedCar}</p>}
          {parkingLotSize && parkingLotSize !== '' && <p>{parkingLotSize}</p>}
          {leftCar && leftCar !== '' && <p>{leftCar}</p>}
          {status && status !== '' && (status.length > 0 ? status.map((index, key) => {
            return (<p key={key}>{index.name + ' parked at slot ' + index.slot}</p>)
          }) : 'parking is free') }
        </div>
      </React.Fragment>
    );
  }
}

export default App;
