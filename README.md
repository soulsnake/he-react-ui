# he-react-ui
[![Build Status](https://travis-ci.org/HealthEngineAU/he-react-ui.svg?branch=master&cache_bust=725a301f3e230f8a0a47afe5e2c28029ad63c9f2)](https://travis-ci.org/HealthEngineAU/he-react-ui)
[![Coverage Status](https://coveralls.io/repos/github/HealthEngineAU/he-react-ui/badge.svg?branch=master&cache_bust=725a301f3e230f8a0a47afe5e2c28029ad63c9f2)](https://coveralls.io/github/HealthEngineAU/he-react-ui?branch=master)

Clean stateless react UI components built for https://healthengine.com.au

## Explore components
react-cosmos is used as development environment for UI components. Go to https://healthengineau.github.io/he-react-ui/ to view

Or to use locally, run
```Shell
yarn cosmos
```
and then head to `localhost:8989`
## Command Line Commands

### Install

```Shell
yarn add he-react-ui
```

or with npm

```Shell
npm install --save he-react-ui
```

### Unit testing

```Shell
yarn test
```

Tests your application with the unit tests specified in the `**/tests/*.js` files
throughout the application.  
All the `test` commands allow an optional `[string]` argument to filter
the tests run by Jest.

```Shell
# Run only the Button component tests
npm test -- Button
```

### Watching

```Shell
yarn test:watch
```

Watches changes to your application and re-runs tests whenever a file changes.
