/*
 * Table
 */

// Vendor
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import style from './Table.scss'

class Table extends Component {
  static propTypes = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        width: PropTypes.oneOf(['extraNarrow', 'narrow', 'wide', 'extraWide'])
      })).isRequired,
    body: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.any.isRequired
        })))
  }

  render () {
    const { body, columns } = this.props

    return (
      <div className={style.table}>
        <div className={style.header}>
          {columns.map((column, index) => (
            <div className={classnames(style.heading, {[style[column.width]]: column.width})} key={index}>
              {column.title}
            </div>
          ))}
        </div>
        <div className={style.body}>
          {body.map((row, rowIndex) => (
            <div className={style.row} key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <div className={classnames(style.cell, {[style[columns[cellIndex].width]]: columns[cellIndex].width})} key={cellIndex}>
                  {cell.content}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Table
