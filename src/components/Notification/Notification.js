import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.scss";
import Alert from "../Icon/Alert";
import Tick from "../Icon/Tick";
import Cross from "../Icon/Cross";
import classnames from "classnames";

export default class Notification extends React.PureComponent {
  static defaultProps = {
    canClose: false,
    closed: false,
    onClose: () => null,
    type: "default"
  };

  static propTypes = {
    canClose: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string
    ]),
    className: PropTypes.string,
    closed: PropTypes.bool,
    onClose: PropTypes.func,
    type: PropTypes.oneOf(["confirmation", "default", "error", "warning"])
  };

  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(event) {
    this.props.onClose(event);
  }

  render() {
    const { canClose, children, className, closed, type } = this.props;
    const notificationClasses = classnames(styles.notification, {
      [styles[type]]: styles[type],
      [className]: className,
      [styles.closed]: closed
    });
    const iconClasses = classnames(styles.icon, {
      [styles[type]]: styles[type]
    });
    const messageClasses = styles.message;
    const closeIconClasses = classnames(styles.closeIcon, {
      [styles[type]]: styles[type]
    });

    return (
      <div className={notificationClasses}>
        {type === "confirmation" && <Tick className={iconClasses} />}
        {type === "warning" && <Alert className={iconClasses} />}
        {type === "error" && <Cross className={iconClasses} />}
        <div className={messageClasses}>{children}</div>
        {canClose && (
          <Cross className={closeIconClasses} onClick={this.handleClose} />
        )}
      </div>
    );
  }
}
