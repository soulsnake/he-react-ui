/**
*
* Label
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../../Icon'
import style from './Label.scss'
import {sp_red} from '../../../styles/colors.js'

class Label extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.bool,
    htmlFor: PropTypes.string.isRequired,
    text: PropTypes.string
  }

  static defaultProps = {
    disabled: false,
    error: false,
    required: false,
    onChange: () => null
  }

  render () {
    const { id, className, error, htmlFor, text, ...restProps } = this.props
    return (
      <div className={classnames(style.label, {[style.error]: error, [className]: className})}>
        {error && <Icon className={style.icon} name="Alert" color={sp_red} width="22" height="22"/>}
        <label htmlFor={htmlFor}>{text}</label>
      </div>
    )
  }
}

export default Label
