/**
 *
 * SingleSelect
 *
 */

import classnames from 'classnames';
import React from 'react';
import Select, { Async } from 'react-select';
import { returnNull } from '../../../util';
import DropDown from '../../Icon/DropDown';
import Label from '../Label';
import style from './SingleSelect.scss';

type Option = { label: string; value: any };

type Props = {
  id: string;
  name: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  large?: boolean;
  error?: string;
  inline?: boolean;
  label?: string;
  placeholder?: string;
  options: Option[];
  value?: string | null | void;
  onChange: Function;
  onBeforeOpen: Function;
  onClose: Function;
  eventTypes?: string | Array<string>;
  preventDefault?: boolean;
  stopPropagation?: boolean;
  loadOptionsAsync?: Function;
  fill?: boolean;
  forceTitle?: string | void;
};

class SingleSelect extends React.Component<Props, any> {
  static defaultProps = {
    disabled: false,
    error: '',
    inline: false,
    value: null,
    onChange: returnNull,
    onBeforeOpen: () => true,
    onClose: () => true,
  };

  state = {
    expanded: false,
  };

  getDisplay = (option: Option) => {
    const { forceTitle } = this.props;

    return forceTitle || option.label;
  };

  handleChange = (data: Option | void) => {
    const oldValue = this.props.value;
    if (data && oldValue !== data.value) {
      const event = {
        value: data.value,
        props: this.props,
      };
      this.props.onChange(event);
    }
  };

  handleOpen = () => {
    this.props.onBeforeOpen();
    this.setState({ expanded: true });
  };

  handleClose = () => {
    this.setState({ expanded: false });
    this.props.onClose();
  };

  render() {
    const {
      id,
      name,
      className,
      required,
      large,
      disabled,
      error,
      inline,
      label,
      placeholder,
      onChange,
      value,
      options,
      eventTypes,
      preventDefault,
      stopPropagation,
      onBeforeOpen,
      onClose,
      forceTitle,
      fill,
      loadOptionsAsync,
      ...restProps
    } = this.props;
    const { handleOpen, handleClose, handleChange } = this;
    const { expanded } = this.state;
    const floating = expanded || value;

    const labelClasses = classnames(style.innerlabel, {
      [style.floating]: floating,
    });
    
    const placeHolderText = (large ? (label ? '' : label) : placeholder)
    return (
      <div
        className={classnames(className, style.outer, {
          [style.fill]: fill,
          [style.inline]: inline,
        })}
        {...restProps}
      >
        {!large && label && (
          <Label className={style.label} htmlFor={id}>
            {label}
          </Label>
        )}
        <div className={classnames(className, style.relative)}>
          <div
            className={classnames(style.container, {
              [style.expanded]: expanded,
              [style.disabled]: disabled,
              [style.error]: error,
              [style.fill]: fill,
              [style.large]: large,
              [style.noLabel]: !label,
            })}
          >
            {large && label && (
              <Label className={labelClasses} htmlFor={id}>
                {label}
              </Label>
            )}
            {loadOptionsAsync ? (
              <Async
                joinValues
                className={classnames(style.select, {
                  [style.expanded]: expanded,
                  [style.disabled]: disabled,
                  [style.error]: error,
                  [style.forceTitle]: forceTitle,
                })}
                disabled={disabled}
                value={value || undefined}
                onChange={handleChange as any}
                onOpen={handleOpen}
                onClose={handleClose}
                placeholder={forceTitle || placeHolderText}
                valueRenderer={this.getDisplay as any}
                id={id}
                name={name}
                required={required}
                cache={false}
                loadOptions={loadOptionsAsync as any}
              />
            ) : (
              <Select
                joinValues
                options={options}
                className={classnames(style.select, {
                  [style.expanded]: expanded,
                  [style.disabled]: disabled,
                  [style.error]: error,
                  [style.forceTitle]: forceTitle,
                })}
                disabled={disabled}
                value={value as any}
                onChange={handleChange as any}
                onOpen={handleOpen}
                onClose={handleClose}
                placeholder={forceTitle || placeHolderText}
                valueRenderer={this.getDisplay as any}
                id={id}
                name={name}
                required={required}
              />
            )}
            <DropDown className={style.caret} />
          </div>
        </div>
      </div>
    );
  }
}

export { SingleSelect as InnerSingleSelect };

export default SingleSelect;
