/**
*
* ActionSet
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import onClickOutside from 'react-onclickoutside'

import style from './ActionSet.scss'
import Icon from '../../Icon'

class ActionSet extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    expanded: PropTypes.bool,
    className: PropTypes.string
  }

  static defaultProps = {
    className: '',
    expanded: false
  }

  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  close = () => {
    this.setState({open: false})
  }

  open = () => {
    this.setState({open: true})
  }

  handleClickOutside = () => {
    this.close()
  }

  render () {
    const { children, className, expanded, ...rest } = this.props
    const { open } = this.state
    const expandable = children.length > 2 && !expanded
    const classes = classnames(style.outer, {
      [style[className]]: className,
      [style.expandable]: expandable,
      [style.open]: open
    })

    return (
      <div
        className={classes}
        onMouseEnter={this.open}
        onMouseLeave={this.close}
        {...rest}>
        {expandable && <Icon className={style.ellipsis} name="Ellipsis" width={36} height={36} onClick={this.open} />}
        <div className={style.actions}>
          { children.map((child, i) => <div key={i} className={style.action} onClick={this.close}>{child}</div>) }
        </div>
      </div>
    )
  }
}

export default onClickOutside(ActionSet)
