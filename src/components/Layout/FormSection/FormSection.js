import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './FormSection.scss'
import Heading from '../Heading'

class FormSection extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.array
  }

  render () {
    const { children, description, heading, ...restProps } = this.props

    return (
      <div
        className={style.outer}
        {...restProps}>
        <div className={style.left}>
          <Heading h3>{heading}</Heading>
          <span className={style.description}>{description}</span>
        </div>
        <div className={style.right}>
          {children}
        </div>
      </div>
    )
  }
}

export default FormSection
