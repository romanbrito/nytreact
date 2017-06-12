import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import {Jumbotron} from 'react-bootstrap';

// could move to routes
import Form from './Form';
import Saved from './Saved';

import helpers from '../utils/helpers';


class Main extends Component {

  state = {
    saved: []
  };

  // The moment the page renders get the saved articles
  componentDidMount() {
    // Get saved articles.
    helpers.getSaved().then((response) => {
      console.log(response);
      if (response !== this.state.saved) {
        console.log('saved', response.data);
        this.setState({saved: response.data});
      }
    }); //.bind(this)
  }

  render() {
  return (
    <div className="container">

      <Jumbotron>
        <h1>New York Times Article Scrubber</h1>
        <p>Search for and annotate articles of interest!</p>
      </Jumbotron>


      {/*Form component*/}
      <Form/>

      {/*Results component*/}

      <Route path="/results" render={props => (
        <Results
          searchTerm={this.state}
        />
      )}/>


      {/*Show saved articles*/}
      <Saved savedArticles={this.state.saved}/>

    </div>

  );
  }
};

export default Main;