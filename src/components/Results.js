import React, {Component} from 'react';

import helpers from '../utils/helpers';

class Results extends Component {

  state = {
    //searchTerm: {},
    results: []
  };


  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate() {
    //if (prevState.searchTerm !== this.state.searchTerm) {
    console.log('Updated');
    console.log(this.props.searchTerm);

    var {topic, startYear, endYear} = this.props.searchTerm;

    if (topic && startYear && endYear) {
      // Run query for the article
      helpers.runQuery(this.props.searchTerm).then((data) => {
        console.log('Articles');
        console.log(data);
        let artArray = data;
        this.setState({results: data});
      })
    }
  }

  render() {
    return (<h2 className="text-center">This is Results</h2>);
  };

}


export default Results;