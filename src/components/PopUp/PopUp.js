/**
*
* Popup
*
*/
import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './PopUp.scss'
import Icon from '../Icon'
import LoadingSpinner from '../Loading/LoadingSpinner'

class PopUp extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    modal: PropTypes.bool,
    onClose: PropTypes.func,
    showing: PropTypes.bool,
    style: PropTypes.object
  }

  static defaultProps = {
    modal: false,
    onClose: () => null,
    showing: false
  }

  constructor (props) {
    super(props)
    this.state = {
      showing: props.showing
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.showing !== this.state.showing) {
      this.setState({
        showing: nextProps.showing
      })
    }
  }

  handleClose = () => {
    if (!this.props.modal) {
      this.setState({
        showing: false
      })
      this.props.onClose()
    }
  }

  render () {
    const { children, className, modal, onClose, showing, style, ...restProps } = this.props
    const classes = classnames(styles.outer, {
      [styles.showing]: this.state.showing,
      [styles[className]]: className
    })

    return (
      <div
        className={classes}
        {...restProps}
      >
        <div className={styles.overlay} onClick={this.handleClose} />
        <div className={styles.popup} style={style}>
          {!modal && <Icon className={styles.close} name="Cross" width={32} height={32} onClick={this.handleClose} />}
          {children || <LoadingSpinner />}
        </div>
      </div>
    )
  }
}

export default PopUp
