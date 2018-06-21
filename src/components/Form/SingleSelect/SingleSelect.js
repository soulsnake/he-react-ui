/**
 *
 * SingleSelect
 *
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import Label from '../Label';
import style from './SingleSelect.scss';
import Icon from '../../Icon';

class SingleSelect extends React.Component {
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
    forceOpen: PropTypes.bool,
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

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
    this.getDisplay = this.getDisplay.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  getDisplay = () => {
    const { options, value, forceTitle, placeholder } = this.props;

    if (forceTitle) return forceTitle;

    const option = options.find(it => it.value === value);
    const firstLabel = (options && options[0] && options[0].label) || '';

    return option ? option.label : placeholder || firstLabel;
  };

  handleChange(data) {
    const oldValue = this.props.value;
    if (oldValue !== data.value) {
      const event = {
        value: data.value,
        props: this.props,
      };

      this.props.onChange(event);
    }
  }

  handleOpen() {
    this.props.onBeforeOpen();
    this.setState({ expanded: true });
  }

  handleClose() {
    this.setState({ expanded: false });
    this.props.onClose();
  }

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
      ...restProps
    } = this.props;
    const { handleOpen, handleClose, handleChange } = this;
    const { expanded } = this.state;

    return (
      <div
        className={classnames(style.outer, { [className]: className })}
        {...restProps}
      >
        {label && (
          <Label className={style.label} htmlFor={id}>
            {label}
          </Label>
        )}
        <div
          className={classnames(style.outer, {
            [className]: className,
            [style.expanded]: expanded,
            [style.disabled]: disabled,
            [style.error]: error,
          })}
          {...restProps}
        >
          <Select
            options={options}
            className={classnames(style.select, {
              [style.expanded]: expanded,
              [style.disabled]: disabled,
              [style.error]: error,
            })}
            disabled={disabled}
            value={value}
            onChange={handleChange}
            onOpen={handleOpen}
            onClose={handleClose}
          />
          <Icon className={style.caret} name="DropDown" />
        </div>
      </div>
    );
  }
}

export { SingleSelect as InnerSingleSelect };

export default SingleSelect;
