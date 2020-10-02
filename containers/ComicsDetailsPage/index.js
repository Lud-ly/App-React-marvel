/*
 * ComicsDetailPage
 *
 * List all the Comics
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import CardPerso from './CardPerso';

const myheader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});
const init = {
  method: 'GET',
  headers: myheader,
  mode: 'cors',
};

export default class ComicsDetailsPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  constructor(props) {
    super(props);
    this.state = {
      comics: null,
      searchId: props.match.params.id,
    };
  }

  componentDidMount() {
    this.handleCallAPIComics(this.state.searchId);
  }

  handleCallAPIComics = id => {
    const url = `https://gateway.marvel.com:443/v1/public/events/${id}?apikey=04ddb3bee1b32fc932fb3f736f1c389d`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({ comics: data.data.results[0] });
      })
      .catch(error => console.log(error)) // error json
      .catch(error => console.log(error)); // error API
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Comics Detail Page</title>
          <meta
            name="comics"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        {this.state.comics ? (
          <CardPerso comics={this.state.comics} />
        ) : (
          <div>aucun resultat</div>
        )}
      </div>
    );
  }
}
