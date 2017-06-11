import React, {Component} from 'react';

import helpers from '../utils/helpers';

class Results extends Component {

  state = {
    results: [],
    searchTerm: {}
  };


  // If the component changes (i.e. if a search is entered)...
  componentDidMount() {
    //if (prevState.searchTerm !== this.state.searchTerm) {
      console.log('Updated');
      console.log(this.props.searchTerm);

      //var {topic, startYear, endYear} = this.props.searchTerm;


      // Run query for the article
      helpers.runQuery(this.props.searchTerm).then((data) => {
        if (data !== this.state.results) {
          this.setState({results: data});
          console.log('Articles');
          console.log(this.state.results);
        }
      })
    //}
  }



  render() {
    return (
      <ul className="list-group">
        {this.state.results.map(item => (
          <li key={item._id} className="list-group-item">
            {item.web_url}
            <hr/>
            {item.headline.main}
            <button
              className="btn btn-primary"
              type="text"
            >
              Save
            </button>
            <hr/>
            {item.pub_date}
          </li>
        ))}
      </ul>
    );
  };

}


export default Results;