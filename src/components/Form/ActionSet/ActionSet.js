/**
 *
 * ActionSet
 *
 */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import onClickOutside from "react-onclickoutside";

import style from "./ActionSet.scss";
import Icon from "../../Icon";

class ActionSet extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    expanded: PropTypes.bool,
    className: PropTypes.string,
    eventTypes: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    outsideClickIgnoreClass: PropTypes.string,
    preventDefault: PropTypes.bool,
    stopPropagation: PropTypes.bool,
    disableOnClickOutside: PropTypes.func,
    enableOnClickOutside: PropTypes.func
  };

  static defaultProps = {
    className: "",
    expanded: false
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  close = () => {
    this.setState({ open: false });
  };

  open = () => {
    this.setState({ open: true });
  };

  handleClickOutside = () => {
    this.close();
  };

  render() {
    const {
      children,
      className,
      expanded,
      eventTypes,
      outsideClickIgnoreClass,
      preventDefault,
      stopPropagation,
      disableOnClickOutside,
      enableOnClickOutside,
      ...rest
    } = this.props;
    const { open } = this.state;
    const expandable = children.length > 2 && !expanded;
    const classes = classnames(style.outer, {
      [style.expandable]: expandable,
      [style.open]: open,
      [className]: className
    });

    return (
      <div
        className={classes}
        onMouseEnter={this.open}
        onMouseLeave={this.close}
        {...rest}
      >
        {expandable && (
          <Icon
            className={style.ellipsis}
            name="Ellipsis"
            width={36}
            height={36}
            onClick={this.open}
          />
        )}
        <div className={style.actions}>
          {children.map((child, i) => (
            <div key={i} className={style.action} onClick={this.close}>
              {child}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default onClickOutside(ActionSet);
