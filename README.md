## Explore components
react-cosmos is used as development environment for UI components. Run
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