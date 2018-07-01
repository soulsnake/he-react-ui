// @flow
/**
 *
 * SingleSelect
 *
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import Icon from '../../Icon';
import Label from '../Label';
import style from './SingleSelect.scss';

type Option = { label: string, value: any };

class SingleSelect extends React.Component<*, *> {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    inline: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
      }),
    ).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBeforeOpen: PropTypes.func,
    onClose: PropTypes.func,
    eventTypes: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    preventDefault: PropTypes.bool,
    stopPropagation: PropTypes.bool,
    fill: PropTypes.bool,
    forceTitle: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    error: '',
    inline: false,
    value: null,
    onChange: () => {},
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

  handleChange = (data: Option) => {
    const oldValue = this.props.value;
    if (oldValue !== data.value) {
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
      forceTitle,
      fill,
      ...restProps
    } = this.props;
    const { handleOpen, handleClose, handleChange } = this;
    const { expanded } = this.state;

    return (
      <div
        className={classnames(style.outer, {
          [className]: className,
          [style.fill]: fill,
        })}
      >
        {label && (
          <Label className={style.label} htmlFor={id}>
            {label}
          </Label>
        )}
        <div
          className={classnames(style.container, {
            [style.expanded]: expanded,
            [style.disabled]: disabled,
            [style.error]: error,
            [style.fill]: fill,
            [style.inline]: inline,
          })}
          {...restProps}
        >
          <Select
            options={options}
            className={classnames(style.select, {
              [style.expanded]: expanded,
              [style.disabled]: disabled,
              [style.error]: error,
              [style.forceTitle]: forceTitle,
            })}
            disabled={disabled}
            value={value}
            onChange={handleChange}
            onOpen={handleOpen}
            onClose={handleClose}
            placeholder={forceTitle || placeholder}
            valueRenderer={this.getDisplay}
            id={id}
            required={required}
          />
          <Icon className={style.caret} name="DropDown" />
        </div>
      </div>
    );
  }
}

export { SingleSelect as InnerSingleSelect };

export default SingleSelect;
