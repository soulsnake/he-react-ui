import classnames from 'classnames';
import React from 'react';
import { returnNull } from '../../util';
import Alert from '../Icon/Alert';
import Cross from '../Icon/Cross';
import Tick from '../Icon/Tick';
import styles from './Notification.scss';

type Props = {
  canClose: boolean;
  children?: Array<any> | Object | string;
  className?: string;
  closed: boolean;
  onClose: Function;
  type: 'confirmation' | 'default' | 'error' | 'warning';
};

export default class Notification extends React.PureComponent<Props> {
  static defaultProps = {
    canClose: false,
    closed: false,
    onClose: returnNull,
    type: 'default',
  };

  handleClose = (event: React.SyntheticEvent<any>) => {
    this.props.onClose(event);
  };

  render() {
    const { canClose, children, className, closed, type } = this.props;
    const notificationClasses = classnames(
      styles.notification,
      {
        [styles[type]]: styles[type],
        [styles.closed]: closed,
      },
      className,
    );
    const iconClasses = classnames(styles.icon, {
      [styles[type]]: styles[type],
    });
    const messageClasses = styles.message;
    const closeIconClasses = classnames(styles.closeIcon, {
      [styles[type]]: styles[type],
    });

    return (
      <div className={notificationClasses}>
        {type === 'confirmation' && <Tick className={iconClasses} />}
        {type === 'warning' && <Alert className={iconClasses} />}
        {type === 'error' && <Cross className={iconClasses} />}
        <div className={messageClasses}>{children}</div>
        {canClose && (
          <Cross className={closeIconClasses} onClick={this.handleClose} />
        )}
      </div>
    );
  }
}
