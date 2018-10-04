/* eslint-disable global-require */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-react-adapter-future';

require('raf/polyfill');

(global as any).requestAnimationFrame = (handler: Function) =>
  setTimeout(handler, 10);

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// Hack, need to look for another solution
(window as any).matchMedia =
  window.matchMedia ||
  function matchMedia() {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

// Cause console errors to fail tests

let accumulatedErrors: any[] = [];

global.console.error = (it: any) => {
  accumulatedErrors.push(it);
};

afterEach(() => {
  const consoleErrors = accumulatedErrors.join('\n');
  accumulatedErrors = [];
  expect(consoleErrors).toBe('');
});
