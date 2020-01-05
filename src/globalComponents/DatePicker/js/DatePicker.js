import React from 'react';
import ReactDatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class DatePicker extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <ReactDatePicker
      className="form-control"
        selected={this.state.startDate}
        onChange={this.handleChange}
        dateFormat='dd/MM/yyyy' 
        placeholder='Enter date'
      />
    );
  }
}

export default DatePicker