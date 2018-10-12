/**
 *
 * Radio
 *
 */

import classnames from 'classnames';
import React from 'react';
import { returnNull } from '../../../util';
import Label from '../Label';
import style from './Radio.scss';
import RadioOption from './RadioOption';
import { Option } from './Option.type';

type Props = {
  name: string;
  id: string;
  className?: string;
  error?: string;
  inline?: boolean;
  label?: string;
  options: Option[];
  value?: string;
  onChange: Function;
};

class Radio extends React.Component<Props> {
  static defaultProps = {
    error: '',
    inline: false,
    onChange: returnNull,
  };

  handleClick = (value: string) => {
    const oldValue = this.props.value;

    if (oldValue !== value) {
      const event = {
        value,
        props: this.props,
      };

      this.props.onChange(event);
    }
  };

  render() {
    const {
      id,
      className,
      error,
      inline,
      label,
      onChange,
      value,
      name,
      options,
      ...restProps
    } = this.props;

    const classes = classnames(
      style.outer,
      {
        [style.inline]: inline,
      },
      className,
    );

    return (
      <div className={classes} id={id} {...restProps}>
        {label && (
          <Label className={style.label} htmlFor={id}>
            {label}
          </Label>
        )}

        <div className={style.options}>
          {options.map(option => (
            <RadioOption
              onClick={this.handleClick}
              key={option.value}
              option={option}
              name={name}
              value={value}
            />
          ))}
        </div>

        {error && (
          <Label className={style.error} error>
            {error}
          </Label>
        )}
      </div>
    );
  }
}

export default Radio;
