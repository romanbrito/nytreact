import React from 'react';
import {Route} from 'react-router-dom';

// could move to routes
import Form from './Form';


const Main = () => {
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
              <Form/>

            </div>
            <div className="col-md-6">


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;