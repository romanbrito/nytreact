import axios from 'axios';
// New York Times authKey
const authKey = 'aab61f8cd4e7499e858933618e21cebd';

let helper = {
  runQuery(articles) {
    console.log('helper run query');
    console.log('run query topic ' + articles.topic);
    console.log('run query start ' + articles.startYear);
    console.log('run query end ' + articles.endYear);

    let searchTerm = articles.topic;
    let startYear = articles.startYear.replace(/-/g, "");
    let endYear = articles.endYear.replace(/-/g, "");

    // Figure out the geolocation

    const queryURL = "https://api.nytimes.com/svc/search/v2/" +
      "articlesearch.json?api-key=" +
      authKey + "&q=" + searchTerm + "&begin_date=" + startYear + "&end_date=" +
      endYear;

    console.log('queryURL ' + queryURL);


    return axios.get(queryURL).then((response) => {
      if (response) {
      console.log("response " + response);
      let responseArray = response.data.response.docs;
      return responseArray;
      }
      // If we don't get any results, return an empty string
      return '';
    });
  },
  getSaved(){
    return axios.get('/api');
  },
  postArticle(data){
    return axios.post('/api', data);
  },
  deleteArticle(articleID){
    return axios.post('/api?_method=DELETE', {articleID});
    console.log("helper delete " + articleID);
  }
};

export default helper;