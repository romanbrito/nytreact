import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import {Jumbotron} from 'react-bootstrap';

// could move to routes
import Form from './Form';
import Saved from './Saved';
import Results from './Results';

import helpers from '../utils/helpers';


class Main extends Component {

  state = {
    saved: [],
    searchTerm:{},
    results: [],
    deleteArticleID:''
  };

  // The moment the page renders get the saved articles
  componentDidMount() {
    // Get saved articles.
    helpers.getSaved().then((response) => {
      //console.log(response);
      if (response !== this.state.saved) {
        //console.log('saved', response.data);
        this.setState({saved: response.data});
      }
    }); //.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    // this avoids continuous calling to api

    if (prevState.saved.map((item) => item._id).join() !== this.state.saved.map((item) => item._id).join()) {
      console.log(prevState.saved.map((item) => item._id).join() + " ---- " + this.state.saved.map((item) => item._id).join());
      // Get saved articles.
      helpers.getSaved().then((response) => {
        console.log(response);
        if (response !== this.state.saved) {
          this.setState({saved: response.data});
          console.log('saved', this.state.saved);
        }
      }); //.bind(this)
    }

  }

  // This function allows childrens to update the parent saved
    // search articles in nyt articles
   getArtTerm= (Term) => {
    console.log(Term);
     // Run query for the article
     helpers.runQuery(Term).then((data) => {
       if (data !== this.state.results) {
         this.setState({results: data});
         console.log('Articles');
         console.log(this.state.results);
       }
     })
  };

  // This function allows childrens to update the parent saved
  // search term
  deleteArticle = (articleID) => {

    console.log(articleID);
    helpers.deleteArticle(articleID);

    helpers.getSaved().then((response) => {
      if (response !== this.state.saved) {
        this.setState({
          saved: response.data
        });
        console.log("saved after delete " + this.state.saved)
      }
    })

  };


  render() {
  return (
    <div className="container">

      <Jumbotron>
        <h1>New York Times Article Scrubber</h1>
        <p>Search for and annotate articles of interest!</p>
      </Jumbotron>


      {/*Form component*/}
      <Form getArtTerm={this.getArtTerm}/>

      {/*Results component*/}

        <Results
          results={this.state.results}
        />


      {/*Show saved articles*/}
      <Saved savedArticles={this.state.saved} deletefunc={this.deleteArticle}/>

    </div>

  );
  }
};

export default Main;