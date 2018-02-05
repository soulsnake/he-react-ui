/**
*
* Input
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import StyledListContainer, { Grid, Col, Row } from './styles'

class List extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object
  }

  static defaultProps = {
    data: {
      headers: ['Col 1', 'Col 2', 'Col 3'],
      rows: [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
    }
  }

  render() {
    const { className, data, ...restProps } = this.props
    let colWidth = `${(100/data.headers.length)}%`
    return (
      <StyledListContainer className={classnames('list-container', { [className]: className })}>
        <Grid>
          <Row className='list-header'>
            {data.headers.map((header, index) =>
              <Col key={index} width={colWidth} className='list-header-cell'>{header}</Col>
            )}
          </Row>
          {data.rows.map((row, rIndex) =>
            <Row key={rIndex} className='list-row'>
              {row.map((col, cIndex) =>
                <Col key={cIndex} width={colWidth} className='list-row-cell'>{col}</Col>
              )}
            </Row>
          )}
        </Grid>
      </StyledListContainer>
    )
  }
}

export default List
