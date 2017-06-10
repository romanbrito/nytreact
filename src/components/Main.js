import React, {Component} from 'react';

import Form from './Form';

import helpers from '../utils/helpers';


class Main extends Component {

  state = {
    searchTerm: {},
    results: [], //
    savedArticles: []
  };

  // The moment the page renders get savedArticles
  componentDidMount() {
    //...
  }

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate(prevProps, prevState) {
    //if (prevState.searchTerm !== this.state.searchTerm) {
      console.log('Updated');
      // Run query for the article
      helpers.runQuery(this.state.searchTerm).then((data) => {
        console.log('Articles');
        console.log(data);
        //this.setState({results: data});
      })
    //}

    // console.log('search term ' + this.state.searchTerm.topic);

  }

  // This function allows childrens to update the parent.
  setTerm = (term) => {
    this.setState({searchTerm: term});
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>New York Times Article Scrubber</h2>
            <p>
              <em>Search for and annotate articles of interest!</em>
            </p>
          </div>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Search</h3>
              </div>
              <div className="panel-body text-center">
               {/*Form component*/}
                <Form setTerm={this.setTerm}/>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;