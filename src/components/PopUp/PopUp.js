// @flow
/**
 *
 * Popup
 *
 */
import classnames from 'classnames';
import React from 'react';
import { returnNull } from '../../util';
import Cross from '../Icon/Cross';
import LoadingSpinner from '../Loading/LoadingSpinner';
import styles from './PopUp.scss';

type Props = {
  children: any,
  className?: string,
  modal?: boolean,
  onClose?: Function,
  onOpen?: Function,
  showing?: boolean,
  noPadding?: boolean,
  style?: Object,
};

class PopUp extends React.Component<Props, *> {
  static defaultProps = {
    modal: false,
    noPadding: false,
    onClose: returnNull,
    onOpen: returnNull,
    showing: false,
  };

  state = {
    showing: (this.props: *).showing,
  };

  componentWillReceiveProps(nextProps: Props) {
    const { showing } = this.state;
    const { onOpen } = this.props;
    if (nextProps.showing !== showing) {
      this.setState({
        showing: nextProps.showing,
      });
      if (nextProps.showing && onOpen) {
        onOpen();
      }
    }
  }

  handleClose = () => {
    const { modal, onClose } = this.props;
    if (!modal) {
      this.setState({
        showing: false,
      });
      if (onClose) {
        onClose();
      }
    }
  };

  render() {
    const { children, className, modal, onClose, onOpen, showing, noPadding, style, ...restProps } = this.props;

    const { showing: stateShowing } = this.state;

    const classes = classnames(styles.outer, {
      [styles.showing]: stateShowing,
    });
    const popupClasses = classnames(styles.popup, className, {
      [styles.popupWithPadding]: !noPadding,
    });

    return (
      <div className={classes} {...restProps}>
        <div className={styles.overlay} onClick={this.handleClose} />
        <div className={popupClasses} style={style}>
          {!modal && <Cross className={styles.close} onClick={this.handleClose} />}
          {children || <LoadingSpinner />}
        </div>
      </div>
    );
  }
}

export default PopUp;
