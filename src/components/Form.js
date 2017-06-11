import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import Results from './Results';

class Form extends Component {

  state = {
    topic: '',
    startYear: '',
    endYear: ''
  };

  handleChange = (key) => {
    return (event) => {
      let state = {};
      state[key] = event.target.value;
      this.setState(state);
    }
  };


  // When a user submits...
  handleSubmit = (event) => {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set parent to have the search term
    // this.props.setTerm(this.state);
    // this.setState({state: {}});
  };


  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h4 className="">
            <strong>Topic</strong>
          </h4>
          {/*
           Note how each of the form elements has an id that matches the state.
           This is not necessary but it is convenient.
           Also note how each has an onChange event associated with our handleChange event.
           */}
          <input
            value={this.state.topic}
            type="text"
            className="form-control"
            id="topic"
            onChange={this.handleChange('topic')}
            required
          />

          <h4>
            <strong>Start Date</strong>
          </h4>
          <input
            value={this.state.startYear}
            type="date"
            className="form-control"
            id="start-Year"
            onChange={this.handleChange('startYear')}
            required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          />

          <h4>
            <strong>End Date</strong>
          </h4>
          <input
            value={this.state.endYear}
            type="date"
            className="form-control"
            id="end-Year"
            onChange={this.handleChange('endYear')}
            required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          />
        </div>
        <div>
            <button
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>

        </div>
      </form>
        {/*Results component*/}
        {/*<Route path="/results" component={Results}/>*/}
        <Results searchTerm={this.state}/>

      </div>
    );
  }
}



export default Form;



