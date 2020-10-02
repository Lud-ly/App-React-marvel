/*
 * SeriesDetailPage
 *
 * List all the Series
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

export default class SeriesDetailsPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  constructor(props) {
    super(props);
    // console.log('props match', props.match.params.id);
    this.state = {
      series: null,
      searchId: props.match.params.id,
    };
  }

  componentDidMount() {
    this.handleCallAPISeries(this.state.searchId);
  }

  handleCallAPISeries = id => {
    const url = `https://gateway.marvel.com:443/v1/public/series/${id}?apikey=04ddb3bee1b32fc932fb3f736f1c389d`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        // console.log('data api', data.data.results);
        this.setState({ series: data.data.results[0] });
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
            name="description"
            content="series page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        {this.state.series ? (
          <CardPerso series={this.state.series} />
        ) : (
          <div>aucun resultat</div>
        )}
      </div>
    );
  }
}
