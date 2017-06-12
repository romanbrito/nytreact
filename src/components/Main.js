import React from 'react';

import {Jumbotron} from 'react-bootstrap';

// could move to routes
import Form from './Form';


const Main = () => {
  return (
    <div className="container">

      <Jumbotron>
        <h1>New York Times Article Scrubber</h1>
        <p>Search for and annotate articles of interest!</p>
      </Jumbotron>


      {/*Form component*/}
      <Form/>

    </div>

  );
};

export default Main;