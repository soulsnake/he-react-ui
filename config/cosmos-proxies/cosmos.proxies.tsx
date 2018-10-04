import createRouterProxy from 'react-cosmos-router-proxy';
import FormWrapperProxy from './FormWrapperProxy';
import ParentLayoutProxy from './ParentLayoutProxy';
import SimulateSubmissionProxy from './SimulateSubmissionProxy';
import WrapperProxy from './WrapperProxy';

export default [
  FormWrapperProxy,
  createRouterProxy(),
  ParentLayoutProxy,
  SimulateSubmissionProxy,
  WrapperProxy,
];
