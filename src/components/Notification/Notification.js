import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styles from './Notification.scss'
import Alert from '../Icon/Alert'
import Tick from '../Icon/Tick'
import Cross from '../Icon/Cross'

export default class Notification extends React.Component {
  static defaultProps = {
    canClose: false,
    type: 'default'
  }

  static propTypes = {
    canClose: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      hidden: false
    }

    this.onClose = this.onClose.bind(this)
  }

  onClose () {
    this.setState({
      hidden: true
    })
  }

  render () {
    const { canClose, children, type } = this.props
    const { hidden } = this.state

    return (
      <Fragment>
        {!hidden &&
          <div className={`${styles.notification} ${styles[type]}`}>
            {type === 'confirmation' && <Tick className={styles.confirmationIcon} height={16} width={16} />}
            {type === 'warning' && <Alert className={styles.warningIcon} height={16} width={16} />}
            {type === 'error' && <Cross className={styles.errorIcon} height={16} width={16} />}
            <div className={styles.message}>{children}</div>
            {canClose && <Cross className={styles.closeIcon} height={24} onClick={this.onClose} width={24} />}
          </div>
        }
      </Fragment>
    )
  }
}
