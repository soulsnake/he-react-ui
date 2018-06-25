/*
 * SubNavigation
 */

// Vendor
import classnames from 'classnames';
import isAbsoluteUrl from 'is-absolute-url';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { matchPath, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import SingleSelect from '../../Form/SingleSelect';
import Icon from '../../Icon';
import LoadingStrip from '../../Loading/LoadingStrip';
import style from './SubNavigation.scss';

class SubNavigation extends Component {
  static propTypes = {
    item: PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
      notifications: PropTypes.number,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          route: PropTypes.string.isRequired,
          exact: PropTypes.bool,
        }),
      ),
    }),
    locations: PropTypes.array,
    onLocationChange: PropTypes.func,
    logoutRoute: PropTypes.string.isRequired,
    location: PropTypes.object,
    locationValue: PropTypes.string,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    loading: false,
  };

  renderItems(items) {
    const { location } = this.props;

    return items.map((item, index) => {
      if (isAbsoluteUrl(item.route)) {
        return (
          <a target="_blank" href={item.route} className={style.item}>
            <span>{item.label}</span>
          </a>
        );
      }
      return (
        <NavLink
          key={index}
          className={classnames(style.item, {
            [style.selected]:
              matchPath(location.pathname + location.hash, {
                path: item.route,
                exact: item.exact || typeof item.exact === 'undefined', // Default to true
                strict: false,
              }) !== null,
          })}
          exact
          to={item.route}
          title={item.label}
        >
          <span>{item.label}</span>
        </NavLink>
      );
    });
  }

  render() {
    const {
      item,
      loading,
      locations,
      onLocationChange,
      locationValue,
      logoutRoute,
    } = this.props;

    return (
      <div className={style.bar}>
        <div className={style.top}>
          {loading ? (
            <LoadingStrip className={style.loadingHeading} />
          ) : (
            <h2 className={style.heading}>{item.title}</h2>
          )}
          <div className={style.controls}>
            {(loading && (
              <span className={style.control}>
                <LoadingStrip className={style.loadingLocation} />
              </span>
            )) ||
              (locations &&
                ((locations.length > 1 && (
                  <span className={classnames(style.control, style.selector)}>
                    <SingleSelect
                      id="locationSelector"
                      name="location"
                      options={locations}
                      onChange={onLocationChange}
                      value={locationValue}
                      fill
                    />
                  </span>
                )) ||
                  (locations.length === 1 && (
                    <span className={style.control}>{locations[0].label}</span>
                  ))))}
            <span className={classnames(style.control, style.logout)}>
              <NavLink
                key="logout"
                to={logoutRoute}
                className={style.navLink}
                title="Logout"
                target="_self"
              >
                <Icon className={style.icon} name="Logout" />Logout
              </NavLink>
            </span>
          </div>
        </div>
        {!loading &&
          item.items &&
          item.items.length > 0 && (
            <div className={style.items}>{this.renderItems(item.items)}</div>
          )}
      </div>
    );
  }
}

export default withRouter(SubNavigation);
