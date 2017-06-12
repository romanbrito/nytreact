import React from 'react';

import helpers from '../utils/helpers';

// delete articles
const deleteArticle = (articleID) => {
  console.log(articleID);
  helpers.deleteArticle(articleID);
};


const Saved = (props) => {
  return (
    <div className="row">
      <h2>Saved Articles</h2>

      <ul className="list-group">
        {props.savedArticles.map(item => (
          <li key={item._id} className="list-group-item">
            {item.url}
            <hr/>
            {item.title}
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => {
                deleteArticle(item._id)
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
};

export default Saved;