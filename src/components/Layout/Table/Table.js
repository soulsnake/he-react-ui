/*
 * Table
 */

// Vendor
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import style from './Table.scss'
import {LoadingSpinner, LoadingStrip} from '../../Loading'

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
          {(columns && columns.length > 0)
            ? columns.map((column, index) => (
              <div className={classnames(style.heading, {[style[column.width]]: column.width})} key={index}>
                {column.title}
              </div>))
            : ['narrow', 'wide', 'extraNarrow'].map(
              (width, index) => (<div key={index} className={classnames(style.heading, {[style[width]]: width})}>
                <LoadingStrip />
              </div>)
            )
          }
        </div>
        <div className={style.body}>
          {(columns && columns.length && body && body.length > 0)
            ? body.map((row, rowIndex) => (
              <div className={style.row} key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <div className={classnames(style.cell, {[style[columns[cellIndex].width]]: columns[cellIndex].width})} key={cellIndex}>
                    {cell.content}
                  </div>
                ))}
              </div>))
            : <LoadingSpinner className={style.bodyLoading} />
          }
        </div>
      </div>
    )
  }
}

export default Table
