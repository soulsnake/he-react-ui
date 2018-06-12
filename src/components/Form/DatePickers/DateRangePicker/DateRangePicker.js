// Value should be passed in, But the current value of the 'custom' tab is local state.
// When we receive a new set of values, we check whether they match a known range,
// and if not, we set the mode to 'custom'.
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { DateRangePicker as InnerDateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import momentPropTypes from 'react-moment-proptypes';
import { Icon, SingleSelect } from '../../../';
import style from './DateRangePicker.module.scss';

const CUSTOM = 'CUSTOM';
const FORMAT = 'D MMM YYYY';

const NEVER = () => false;

function sameDay(firstMoment, secondMoment) {
  return firstMoment && secondMoment && firstMoment.isSame(secondMoment, 'd');
}

export default class DateRangePicker extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.arrayOf(momentPropTypes.momentObj),
      }),
    ),

    value: PropTypes.arrayOf(momentPropTypes.momentObj),

    id: PropTypes.string,

    className: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,

    allowCustom: PropTypes.bool,

    onChange: PropTypes.func,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    allowCustom: true,
    options: [],
    placeholder: 'Select a date range',
    id: 'date-range-picker',
  };

  state = {
    focusedInput: null,
    selectOpen: false,
  };

  getSelectOptions = () => {
    const { options, allowCustom } = this.props;

    const wrappedOptions = options.map(({ label }, index) => ({
      label,
      value: String(index),
    }));

    if (allowCustom)
      wrappedOptions.push({
        label: 'Custom',
        value: CUSTOM,
      });

    return wrappedOptions;
  };

  getSelectValue = () => {
    const { value, options } = this.props;

    const index = options.findIndex(
      entry =>
        sameDay(entry.value[0], value[0]) && sameDay(entry.value[1], value[1]),
    );

    return index === -1 ? CUSTOM : String(index);
  };

  handleFocusChange = focusedInput => {
    this.setState({ focusedInput });
  };

  handleDatesChange = ({ startDate, endDate }) => {
    this.props.onChange({ value: [startDate, endDate] });
  };

  showCustomPicker = () => {
    this.setState({ focusedInput: 'startDate' });
  };

  handleSelectChange = ev => {
    if (ev.value === CUSTOM) {
      this.showCustomPicker();
    } else {
      this.props.onChange(this.props.options[ev.value]);
    }
  };

  handleSelectOpen = () => {
    this.setState({ selectOpen: true });
    if (this.props.options.length) {
      return true;
    }
    this.showCustomPicker();
    return false;
  };

  handleSelectClose = () => {
    this.setState({ selectOpen: false });
  };

  getRangeTitle = () => {
    const { value } = this.props;
    const [startDate, endDate] = value || [null, null];
    return (
      startDate &&
      endDate &&
      `${startDate.format(FORMAT)} — ${endDate.format(FORMAT)}`
    );
  };

  render() {
    const { error, disabled, className, label, value, id } = this.props;

    const [startDate, endDate] = value || [null, null];

    const { focusedInput, selectOpen } = this.state;

    const classes = classNames(style.outer, className);

    const placeholder = this.getRangeTitle() || this.props.placeholder;

    const selectValue = this.getSelectValue();
    const shouldForceTitle = selectOpen || selectValue === CUSTOM;

    return (
      <div className={classes}>
        <SingleSelect
          id={`${id}-select-id`}
          value={selectValue}
          forceTitle={shouldForceTitle ? placeholder : null}
          label={label}
          error={error}
          disabled={disabled}
          placeholder={placeholder}
          name={`${id}-select-name`}
          onChange={this.handleSelectChange}
          onBeforeOpen={this.handleSelectOpen}
          onClose={this.handleSelectClose}
          options={this.getSelectOptions()}
          forceOpen={!!focusedInput}
        />

        <div className={style.inner}>
          <InnerDateRangePicker
            startDateId={`${id}-start`}
            customArrowIcon={null}
            minimumNights={0}
            endDateId={`${id}-end`}
            startDate={startDate}
            endDate={endDate}
            daySize={28}
            disabled={disabled}
            onDatesChange={this.handleDatesChange}
            onFocusChange={this.handleFocusChange}
            navNext={<Icon name="ChevronRight" />}
            navPrev={<Icon name="ChevronLeft" />}
            focusedInput={focusedInput}
            isDayBlocked={NEVER}
            isOutsideRange={NEVER}
          />
        </div>
      </div>
    );
  }
}
