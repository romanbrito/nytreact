import React, {Component} from 'react';

import helpers from '../utils/helpers';

class Saved extends Component {

  state = {
    articleID:''
  };

  handleDlete = (IDarticle) => {
    console.log(IDarticle);

  // Set the parent to have the search term
  this.props.deletefunc(IDarticle);
  //this.setState({ articleID: IDarticle });
};

  render() {
    return (
      <div className="row">
        <h2>Saved Articles</h2>

        <ul className="list-group">
          {this.props.savedArticles.map(item => (
            <li key={item._id} className="list-group-item">
              {item.url}
              <hr/>
              {item.title}
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => {
                  this.handleDlete(item._id)
                }}
              >
                delete
              </button>
              <hr/>
              {item.date}
            </li>
          ))}
        </ul>

      </div>

    );
  }
}

export default Saved;