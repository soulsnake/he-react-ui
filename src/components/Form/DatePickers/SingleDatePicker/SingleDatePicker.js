// @flow
/**
 *
 * SingleDatePicker
 *
 */

import classnames from 'classnames';
import React from 'react';
import type moment from 'moment';
import { SingleDatePicker as Picker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Media from 'react-media';
import { returnNull } from '../../../../util';
import Calendar from '../../../Icon/Calendar';
import ChevronLeft from '../../../Icon/Chevrons/ChevronLeft';
import ChevronRight from '../../../Icon/Chevrons/ChevronRight';
import Label from '../../Label';
import styles from './SingleDatePicker.scss';

type FocusChange = { focused: string };

type DisplayFormat = Function | string;

type Props = {
  id: string,
  anchorDirection?: 'left' | 'right',
  className?: string,
  disabled?: boolean,
  displayFormat?: DisplayFormat,
  error?: string,
  horizontalMargin?: number,
  isOutsideRange?: Function,
  inline?: boolean,
  label?: string,
  readOnly?: boolean,
  onBlur: Function,
  onChange: Function,
  onFocus: Function,
  value?: moment,
  style?: Object,
  placeholder?: string,
};

class SingleDatePicker extends React.Component<Props, *> {
  static defaultProps = {
    anchorDirection: 'left',
    disabled: false,
    displayFormat: 'DD/MM/YYYY',
    inline: false,
    placeholder: 'Date',
    readOnly: false,
    onBlur: returnNull,
    onChange: returnNull,
    onFocus: returnNull,
  };

  state = {
    focused: false,
    date: (this.props: Props).value,
  };

  componentWillReceiveProps(nextProps: typeof SingleDatePicker.prototype.props) {
    const { date } = this.state;
    if (nextProps.value !== date) {
      this.setState({
        date: nextProps.value,
      });
    }
  }

  handleDateChange = (date: moment) => {
    const { onChange } = this.props;
    const { date: oldDate } = this.state;
    this.setState({ date });
    if ((oldDate && oldDate.toJSON()) !== (date && date.toJSON())) {
      const event = {
        value: date,
        props: this.props,
      };
      onChange(event);
    }
  };

  handleFocusChange = (change: FocusChange) => {
    const { onFocus, onBlur } = this.props;
    const { focused } = change;
    this.setState({ focused });
    const event = {
      focused,
      props: this.props,
    };
    if (focused) {
      onFocus(event);
    } else {
      onBlur(event);
    }
  };

  render() {
    const {
      id,
      error,
      horizontalMargin,
      inline,
      label,
      className,
      disabled,
      style,
      anchorDirection,
      displayFormat,
      isOutsideRange,
      readOnly,
      placeholder,
    } = this.props;

    const { focused, date } = this.state;

    const classes = classnames(
      styles.outer,
      {
        [styles.error]: error,
        [styles.disabled]: disabled,
        [styles.focused]: focused,
        [styles.inline]: inline,
      },
      className,
    );

    return (
      <div className={classes} style={style}>
        {label && <Label className={styles.label}>{label}</Label>}
        <div className={styles.inner}>
          <Media query={{ maxWidth: 767 }}>
            {matches => (
              <Picker
                date={date}
                daySize={28}
                disabled={disabled}
                horizontalMargin={matches ? 0 : horizontalMargin}
                id={id}
                numberOfMonths={matches ? 1 : 2}
                onDateChange={this.handleDateChange}
                focused={focused}
                onFocusChange={this.handleFocusChange}
                navNext={<ChevronRight />}
                navPrev={<ChevronLeft />}
                anchorDirection={anchorDirection}
                displayFormat={displayFormat}
                isOutsideRange={isOutsideRange}
                readOnly={readOnly}
                placeholder={placeholder}
              />
            )}
          </Media>
          <Calendar className={styles.icon} />
        </div>
        {error && (
          <Label className={styles.errorMessage} htmlFor={id} error>
            {error}
          </Label>
        )}
      </div>
    );
  }
}

export default SingleDatePicker;
