import React from 'react';
import { Route } from 'react-router-dom';
import { matchPath } from 'react-router';

type Props = {
  render: Function;
  path: string;
  exact?: boolean | undefined;
  strict?: boolean;
};

export default function HashRoute(props: Props) {
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
