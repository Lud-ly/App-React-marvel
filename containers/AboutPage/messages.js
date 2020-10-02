/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.AboutPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'App Search Marvel reactjs ',
  },
  scaffoldingHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage:
      'State change :Components React with Hooks,mouse enter and click buttons !',
  },
  scaffoldingMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `React has been designed from the start for gradual adoption,
     and you can use as little or as much React as you need. 
     Whether you want to get a taste of React, 
     add some interactivity to a simple HTML page, 
     or start a complex React-powered app, the links in this section
      will help you get started.`,
  },
  feedbackHeader: {
    id: `${scope}.feedback.header`,
    defaultMessage: 'Add React to a Website',
  },
  feedbackMessage: {
    id: `${scope}.feedback.message`,
    defaultMessage: `
    You can add React to an HTML page in one minute. You can then either
     gradually expand its presence, or keep it contained to a few dynamic widgets.
     Create a New React App
     When starting a React project, a simple HTML page with script tags might still 
     be the best option. It only takes a minute to set up!
     As your application grows, you might want to consider a more integrated setup.
    There are several JavaScript toolchains we recommend for larger applications.
    Each of them can work with little to no configuration and lets you take full
    advantage of the rich React ecosystem. Learn how.`,
  },
  stateManagementHeader: {
    id: `${scope}.state_management.header`,
    defaultMessage: 'Predictable state management',
  },
  stateManagementMessages: {
    id: `${scope}.state_management.message`,
    defaultMessage: `
      Unidirectional data flow allows for change logging and time travel
    debugging.
    `,
  },
  javascriptHeader: {
    id: `${scope}.javascript.header`,
    defaultMessage: 'Next generation JavaScript',
  },
  javascriptMessage: {
    id: `${scope}.javascript.message`,
    defaultMessage: `Use template strings, object destructuring, arrow functions, JSX
    syntax and more, today.`,
  },
  cssHeader: {
    id: `${scope}.css.header`,
    defaultMessage: 'Features',
  },
  cssMessage: {
    id: `${scope}.css.message`,
    defaultMessage: 'Next generation CSS',
  },
  routingHeader: {
    id: `${scope}.routing.header`,
    defaultMessage: 'Industry-standard routing',
  },
  routingMessage: {
    id: `${scope}.routing.message`,
    defaultMessage: `
      Write composable CSS that's co-located with your components for
    complete modularity. Unique generated class names keep the
    specificity low while eliminating style clashes. Ship only the
    styles that are on the page for the best performance.
    `,
  },
  networkHeader: {
    id: `${scope}.network.header`,
    defaultMessage: 'Offline-first',
  },
  networkMessage: {
    id: `${scope}.network.message`,
    defaultMessage: `
      The next frontier in performant web apps: availability without a
      network connection from the instant your users load the app.
    `,
  },
  intlHeader: {
    id: `${scope}.internationalization.header`,
    defaultMessage:
      'Complete i18n Standard Internationalization & Pluralization',
  },
  intlMessage: {
    id: `${scope}.internationalization.message`,
    defaultMessage:
      'Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.',
  },
});
