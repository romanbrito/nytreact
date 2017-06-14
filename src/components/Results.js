import React, {Component} from 'react';

import helpers from '../utils/helpers';

class Results extends Component {

  // state = {
  //   results: [],
  //   searchTerm: {},
  //   article: {}
  // };

  // componentDidUpdate() {
  //   helpers.postArticle(this.state.article)
  //     .then(() => {
  //     console.log("posted to mongo");
  //   })
  // }

  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state

  // If the component changes (i.e. if a search is entered)...
  // componentDidMount() {
  //   //if (prevState.searchTerm !== this.state.searchTerm) {
  //     console.log('Updated');
  //     console.log(this.props.searchTerm);
  //
  //     //var {topic, startYear, endYear} = this.props.searchTerm;
  //
  //
  //     // Run query for the article
  //     helpers.runQuery(this.props.searchTerm).then((data) => {
  //       if (data !== this.state.results) {
  //         this.setState({results: data});
  //         console.log('Articles');
  //         console.log(this.state.results);
  //       }
  //     })
  //   //}
  // }

  // save articles
  saveArticle = (article)=>{
    console.log(article);
    helpers.postArticle(article);
    // Set the parent to have the search term
    this.props.savefunc(article._id);
  };

  render() {
    return (
      <div className="container">
        <h2>Search Results</h2>
      <ul className="list-group">
        {this.props.results.map(item => (
          <li key={item._id} className="list-group-item">
            {item.web_url}
            <hr/>
            {item.headline.main}
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {this.saveArticle(item)}}
            >
              Save
            </button>
            <hr/>
            {item.pub_date}
          </li>
        ))}
      </ul>
      </div>
    );
  };

}


export default Results;