/*
 * ComicsPage
 *
 * List all Comics
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H2 from 'components/H2';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import messages from './messages';
import TablePerso from './TablePerso';
import GridPerso from './GridPerso';
const myheader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});
const init = {
  method: 'GET',
  headers: myheader,
  mode: 'cors',
};

export default class ComicsSeriesPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: 'avengers',
      series: [],
      checked: true,
    };
  }

  componentDidMount() {
    this.handleCallAPI3Series(this.state.searchTitle);
  }

  handleChange = event => {
    const title = event.target.value;
    // console.log('handleChange comicspage', title);
    this.setState({
      searchTitle: title,
    });
  };

  handleSearch = () => {
    this.handleCallAPI3Series(this.state.searchTitle);
    // console.log("handleSearch comicspage",title)
  };

  handleCheck = event => {
    const c = event.target.checked;
    this.setState({
      checked: c,
    });
  };

  handleCallAPI3Series = title => {
    const url = `https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${title}&apikey=04ddb3bee1b32fc932fb3f736f1c389d`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        // console.log('data api3', data.data.results);
        this.setState({ series: data.data.results });
      })
      .catch(error => console.log(error)) // error json
      .catch(error => console.log(error)); // error API
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>SeriesPage</title>
          <meta
            name="description"
            content="Personnages page of React.js Boilerplate application"
          />
        </Helmet>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
        <TextField
          value={this.state.searchTitle}
          onChange={this.handleChange}
          id="outlined-full-width"
          label="TITLE"
          style={{ margin: 8 }}
          placeholder="avengers"
          helperText="Ex: Marvel NOW!..World War..wolverine.."
          margin="normal"
          fullWidth
        />
        <Button variant="outlined" color="primary" onClick={this.handleSearch}>
          GO
        </Button>
        <Checkbox checked={this.state.checked} onChange={this.handleCheck} />
        détail
        {/* this.state.persos[0] ?  <CardPerso perso={this.state.persos[0]} /> : <div></div> */}
        {this.state.checked ? (
          <GridPerso series={this.state.series} />
        ) : (
          <TablePerso series={this.state.series} />
        )}
      </div>
    );
  }
}
