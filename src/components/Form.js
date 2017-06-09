import React, {Component} from 'react';

class Form extends Component {

  state ={
    term: '' // Object composed of topic start and end Date
  };

  // This function will respond to the user input
  handleChange = (event) => {
    this.setState({ term: event.target.value });
  };


  // When a user submits...
  handleSubmit = (event) => {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: '' });
  };


  render() {
    return (
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
            value={this.state.term}
            type="text"
            className="form-control"
            id="topic"
            onChange={this.handleChange}
            required
          />

          <h4>
            <strong>Start Year</strong>
          </h4>
          <input
            // value={this.state.startYear}
            type="date"
            className="form-control"
            id="start-Year"
            // onChange={this.handleChange}
            // required
          />

          <h4>
            <strong>End Year</strong>
          </h4>
          <input
            // value={this.state.endYear}
            type="date"
            className="form-control"
            id="end-Year"
            // onChange={this.handleChange}
            // required
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
    );
  }
}

export default Form;