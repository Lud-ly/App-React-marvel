/*
 * FeaturePage
 *
 * List all the features
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

export default class PersonnageDetailsPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  constructor(props) {
    super(props);
    // console.log('props match', props.match.params.id);
    this.state = {
      perso: null,
      searchId: props.match.params.id,
    };
  }

  componentDidMount() {
    this.handleCallAPIPerso(this.state.searchId);
  }

  handleCallAPIPerso = id => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=04ddb3bee1b32fc932fb3f736f1c389d`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        // console.log('data api', data.data.results);
        this.setState({ perso: data.data.results[0] });
      })
      .catch(error => console.log(error)) // error json
      .catch(error => console.log(error)); // error API
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Marvel Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        {this.state.perso ? <CardPerso perso={this.state.perso} /> : <div />}
      </div>
    );
  }
}
