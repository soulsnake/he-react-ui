/**
*
* SmartSearch
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import StyledSmartSearch, { StyledSmartSearchBlock } from './styles'
import { setCursor, KEYS, tokenize, prepareConfig, sanitizeToken, deserializeQueryString } from './util'
import Token from './token'

const configHash = {
  '@': {
    type: 'list',
    defaultHint: 'any user',
    sectionTitle: 'Users',
    content: [
      { value: 'abrahm', label: 'Abrahm Micanski' },
      { value: 'lilly', label: 'Lilly Richards' },
      { value: 'emma', label: 'Emma Roberts' }
    ]
  },

  'before:': {
    type: 'date',
    defaultHint: 'a date'
  },

  'after:': {
    type: 'date',
    defaultHint: 'a date'
  }
}
class SmartSearch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    firstTimeFocus: false,
    cursorLocation: -1,
    enterClicked: false,
    upClicked: false,
    downClicked: false,
    activeToken: null,
    inputValue: ''
  }

  tokenConfig = prepareConfig(configHash)
  activeToken = null
  tokens = []
  getTokens = (value) => {
    return tokenize(value, this.tokenConfig)
  }
  getActiveToken = (activeTokenIndex, tokens) => {
    return tokens[activeTokenIndex]
  }
  getTokenEndCursorPos (token, tokens) {
    let sum = 0
    let t
    for (var i = 0; i < tokens.length; i++) {
      t = tokens[i]
      sum += t.value.length
      if (t === token) { break }
    }
    return sum
  }
  getTokensString (tokens) {
    return tokens
      .reduce(function (sum, token) {
        sum += token.value
        return sum
      }, '')
  }
  isLastTokenSelected = (activeTokenIndex, tokens) => {
    let tokensCount = tokens.length
    return tokensCount && (tokensCount - 1) === activeTokenIndex
  }
  setCursor = (newLocation) => {
    this.setState({
      cursorLocation: newLocation
    })
  }
  activeTokenIndex = (tokens, cursorLocation) => {
    let sumIndex = 0
    let token, startIndex, endIndex
    let length = tokens.length
    for (var i = 0; i < length; i++) {
      token = tokens[i]
      startIndex = sumIndex
      endIndex = token.fullText().length + startIndex
      sumIndex = endIndex
      if (startIndex < cursorLocation && cursorLocation <= endIndex) {
        return i
      }
    }
    return -1
  }
  onFocusIn = () => {
    this.setState({
      firstTimeFocus: true
    })
    this.props.focusIn()
  }

  onFocusOut () {
    this.setState({
      cursorLocation: -1
    })
    // TODO: scrollBackground
    this.scrollBackground(0)
    this.props.focusOut()
  }

  onKeyDown = (e) => {
    const { target, keyCode } = e
    if (keyCode === KEYS.ENTER) {
      e.preventDefault()
      this.setState({ enterClicked: !this.state.enterClicked })
    } else if (keyCode === KEYS.ESC) {
      e.preventDefault()
    } else if (keyCode === KEYS.UP) {
      e.preventDefault()
      this.setState({ upClicked: !this.state.upClicked })
    } else if (keyCode === KEYS.DOWN) {
      e.preventDefault()
      this.setState({ downClicked: !this.state.downClicked })
    } else {
      if (keyCode === KEYS.TAB) {
        e.preventDefault()
      }
      this.tokens = this.getTokens(target.value)
      let activeTokenIndex = this.activeTokenIndex(this.tokens, target.selectionStart)
      this.activeToken = this.getActiveToken(activeTokenIndex, this.tokens)
      if (this.activeToken) {
        let tokenType = this.activeToken.type // token type before autocomplete
        if (this.activeToken.autoComplete()) {
          let hasVal = this.activeToken.value
          let isLastTokenSelected = this.isLastTokenSelected(activeTokenIndex, this.tokens)
          let cursorLocation = this.getTokenEndCursorPos(this.activeToken, this.tokens)
          if (hasVal) {
            if (isLastTokenSelected) {
              this.tokens.push(new Token({ fullText: ' ' }))
            }
            cursorLocation += 1
          }

          let tokensString = this.getTokensString(this.tokens)
          this.setState({
            proxyValue: tokensString
          })
          this.setCursor(cursorLocation)
          if (tokenType !== 'default') {

          }
        } else if (this.activeToken.type !== 'date') {
          this.setState({
            downClicked: !this.state.downClicked
          })
        }
      }
      this.setState({
        inputValue: target.value,
        cursorLocation: target.selectionStart,
        firstTimeFocus: false
      })
    }

    let queryString = target.value
    let modifiers = deserializeQueryString(queryString, this.tokenConfig)
  }
  renderRows (list) {
    return list.map((item, index) =>
      (<li key={index} className="">
        <b>{item.label}</b> <span className="modifier-value">{item.value}</span>
      </li>)
    )
  }
  renderHintList (hintValues) {
    let list = _.values(_.groupBy(hintValues, 'section'))
    let current = null
    return list.map((item, index) =>
      (<div key={index} >
        <div className="section-header">
          <hr />
          <span className="header-label">{item[0].section}</span>
        </div>
        <ul className="slack-search-input-list">
          {this.renderRows(item)}
        </ul>
      </div>)
    )
  }
  render () {
    const { className, ...restProps } = this.props
    let hintValue = ''
    let hintValues = []
    if (this.activeToken) {
      hintValues = this.activeToken.hints()
      hintValue = this.activeToken.hint()
    }
    return (
      <StyledSmartSearch
        className={classnames({ [className]: className })}>
        <input
          autoComplete="off"
          spellCheck={false}
          onKeyDown={this.onKeyDown}
          className="main-input" />
        <div className="background-container">
          {this.tokens.map((token, index) =>
            (<div key={index}>
              <span className="modifier">
                {token.modifier}{token.value}
              </span>
            </div>)
          )}
          <span className="hint-value">{hintValue}</span>
        </div>
        {hintValues.length > 0 &&
          <div className="hint-menu-container">
            <span className="arrow" />
            <span className="arrow-border" />
            <div className="hint-menu with-help">
              {this.renderHintList(hintValues)}
            </div>
          </div>
        }
      </StyledSmartSearch>
    )
  }
}

export default SmartSearch
