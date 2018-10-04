import React from 'react';
import LoadingSpinner from '../../Loading/LoadingSpinner';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import style from './FormSection.scss';

function FormSection(props: {
  children: any;
  heading: string;
  description: string;
}) {
  const { children, description, heading, ...restProps } = props;

  return (
    <div className={style.outer} {...restProps}>
      <div className={style.left}>
        <Heading h3>{heading}</Heading>
        <Paragraph>{description}</Paragraph>
      </div>
      <div className={style.right}>
        {children || <LoadingSpinner className={style.spinner} />}
      </div>
    </div>
  );
}

export default FormSection;
