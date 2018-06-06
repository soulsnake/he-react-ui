/*
 * TabView
 */

// Vendor
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Heading from '../Heading';
import style from './TabView.scss';

class TabView extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        exact: PropTypes.bool,
        strict: PropTypes.bool,
      }),
    ),
  };

  renderTabs = tabs =>
    tabs.map((tab, index) => (
      <NavLink
        key={index}
        className={style.tab}
        activeClassName={style.selected}
        to={tab.route}
        exact={tab.exact}
        strict={tab.strict}
        title={tab.title}
      >
        <span>{tab.title}</span>
      </NavLink>
    ));

  render() {
    const { heading, tabs } = this.props;

    return (
      <div>
        <div className={style.barOuter}>
          <div className={style.barInner}>
            <Heading h1 nav className={style.heading}>
              {heading}
            </Heading>
            <div className={style.tabs}>{this.renderTabs(tabs)}</div>
          </div>
        </div>
        <div className={style.contentPusher} />
      </div>
    );
  }
}

export default TabView;
