/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import NoFound from './noFound.jpg';
import Img from './Img';

export default function NotFound() {
  return (
    <article>
      <H1>
        <FormattedMessage {...messages.header} />
        <Img src={NoFound} alt="Mon_App react-boilerplate - Logo" />
      </H1>
    </article>
  );
}
