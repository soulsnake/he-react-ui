/**
*
* ActionSet
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import style from './ActionSet.scss'
import ActionIcon from '../ActionIcon/ActionIcon';
import Icon from '../../Icon';

class ActionSet extends React.Component {
  static propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.oneOf(['teal', 'blue', 'green', 'red', 'white']),
      disabled: PropTypes.bool,
      expanded: PropTypes.bool,
      onClick: PropTypes.func,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      className: PropTypes.string
    })),
    className: PropTypes.string
  }

  static defaultProps = {
    className: '',
    expanded: false
  }

  render () {
    const { actions, className, expanded, ...rest } = this.props
    const expandable = actions.length > 2 && !expanded
    const classes = classnames(style.outer, {
      [style[className]]: className,
      [style.expandable]: expandable
    })

    return (
      <div
        className={classes}
        {...rest}>
        {expandable && <Icon className={style.ellipsis} name="Ellipsis" width={36} height={36} />}
        <div className={style.actions}>
          { actions.map((action) => {
            const { icon, title, ...restProps } = action
            return (
              <ActionIcon icon={icon} title={title} className={style.action} {...restProps} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default ActionSet
