import classnames from 'classnames';
import React from 'react';
import { returnNull } from '../../../../util';
import RadioChecked from '../../../Icon/CheckBoxes/RadioChecked';
import RadioUnchecked from '../../../Icon/CheckBoxes/RadioUnchecked';
import style from './RadioOption.scss';
import { Option } from '../Option.type';

export default class RadioOption extends React.Component<{
  onClick: Function;
  name: string;
  option: Option;
  value?: string;
}> {
  handleClick = () => {
    this.props.onClick(this.props.option.value);
  };

  render() {
    const { name, option, value } = this.props;

    const outerClass = classnames(style.option, {
      [style.selected]: value === option.value,
    });
    const uncheckedClass = classnames(style.icon, style.empty);
    const checkedClass = classnames(style.icon, style.full);

    return (
      <div className={outerClass} onClick={this.handleClick}>
        <input
          className={style.input}
          value={option.value}
          type="radio"
          name={name}
          checked={value === option.value}
          onChange={returnNull}
        />
        <RadioUnchecked className={uncheckedClass} name="RadioUnchecked" />
        <RadioChecked className={checkedClass} name="RadioChecked" />
        {option.label && <label className={style.tag}>{option.label}</label>}
        {option.child &&
          (option.showChild || value === option.value) && (
            <div className={style.child}>{option.child}</div>
          )}
      </div>
    );
  }
}
