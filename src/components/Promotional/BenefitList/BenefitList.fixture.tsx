import React from 'react';
import BenefitList from '.';
import BenefitItem from '../BenefitItem';

const item = (
  <BenefitItem>
    <em>Really good for this</em> in some truly amazing ways
  </BenefitItem>
);
const content = (
  <React.Fragment>
    {item}
    {item}
    {item}
    {item}
    {item}
    {item}
    {item}
  </React.Fragment>
);

export default {
  component: BenefitList,
  children: content,
};
