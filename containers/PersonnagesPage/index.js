/*
 * PersonnagesPage
 *
 * List all Marvel
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
import Pow from './pow.png';
import Img from './Img';

const myheader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});
const init = {
  method: 'GET',
  headers: myheader,
  mode: 'cors',
};

export default class PersonnagesPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  constructor(props) {
    super(props);
    this.state = {
      searchName: 'spider-man',
      persos: [],
      checked: true,
    };
  }

  componentDidMount() {
    this.handleCallAPIPerso(this.state.searchName);
  }

  handleChange = event => {
    const name = event.target.value;
    // console.log('handleChange', name);
    this.setState({
      searchName: name,
    });
  };

  handleSearch = () => {
    this.handleCallAPIPerso(this.state.searchName);
  };

  handleCheck = event => {
    const c = event.target.checked;
    this.setState({
      checked: c,
    });
  };

  handleCallAPIPerso = name => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=04ddb3bee1b32fc932fb3f736f1c389d`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        // console.log("data api",data.data.results);
        this.setState({ persos: data.data.results });
      })
      .catch(error => console.log(error)) // error json
      .catch(error => console.log(error)); // error API
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>MarvelPage</title>
          <meta name="Marvel" content="MarvelPage " />
        </Helmet>
        <H2>
          <FormattedMessage {...messages.header} />
          <Img src={Pow} alt="Mon_App " title="hhyy" />
        </H2>
        <TextField
          value={this.state.searchName}
          onChange={this.handleChange}
          id="outlined-full-width"
          label="NAME"
          style={{ margin: '9px' }}
          placeholder="Search"
          helperText="Ex: spiderman..storm..wolverine..doctor.."
          margin="normal"
          fullWidth
        />
        <Button
          style={{ marginRight: '300px' }}
          variant="outlined"
          color="secondary"
          onClick={this.handleSearch}
        >
          GO !
        </Button>
        détail
        <Checkbox checked={this.state.checked} onChange={this.handleCheck} />
        {/* this.state.persos[0] ?  <CardPerso perso={this.state.persos[0]} /> : <div></div> */}
        {this.state.checked ? (
          <GridPerso persos={this.state.persos} />
        ) : (
          <TablePerso persos={this.state.persos} />
        )}
      </div>
    );
  }
}
