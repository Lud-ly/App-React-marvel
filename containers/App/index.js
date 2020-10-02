/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import PersonnagesPage from 'containers/PersonnagesPage/Loadable';
import ComicsPage from 'containers/ComicsPage/Loadable';
import ComicsSeriesPage from 'containers/ComicsSeriesPage/Loadable';
import SeriesDetailPage from 'containers/SeriesDetailPage/Loadable';
import PersonnageDetailsPage from 'containers/PersonnageDetailsPage/Loadable';
import ComicsDetailsPage from 'containers/ComicsDetailsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="React.js" defaultTitle="React.js Boilerplate">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/search" component={PersonnagesPage} />
        <Route path="/persobyid/:id" component={PersonnageDetailsPage} />
        <Route path="/seriesbyid/:id" component={SeriesDetailPage} />
        <Route path="/search2" component={ComicsPage} />
        <Route path="/comicsbyid/:id" component={ComicsDetailsPage} />
        <Route path="/search3" component={ComicsSeriesPage} />
        <Route path="/search4" component={AboutPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
