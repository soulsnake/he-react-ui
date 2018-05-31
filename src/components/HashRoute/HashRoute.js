import React from 'react';
import { Route } from 'react-router-dom';
import { matchPath } from 'react-router';
import PropTypes from 'prop-types';

function HashRoute(props) {
  const { render, path, exact, strict } = props;
  return (
    <Route
      render={({ location }) =>
        matchPath(location.pathname + location.hash, { path, exact, strict }) &&
        render()
      }
    />
  );
}

HashRoute.propTypes = {
  render: PropTypes.func,
  path: PropTypes.string,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
};

export default HashRoute;
