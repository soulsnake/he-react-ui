/**
 *
 * Navigation List
 *
 */

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { matchPath } from "react-router";
import { NavLink } from "react-router-dom";

import styles from "./List.scss";

const SUPPORTED_BADGES = ["NEW", "FREE"];

class List extends Component {
  static propTypes = {
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        badge: PropTypes.oneOf(SUPPORTED_BADGES),
        notifications: PropTypes.number
      })
    ),
    className: PropTypes.string,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    className: "",
    onSelect: () => null
  };

  constructor(props) {
    super(props);

    this.renderBadge = this.renderBadge.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  renderBadge(item) {
    if (item.notifications > 0) {
      return (
        <div className={classnames(styles.badge, styles.notification)}>
          {item.notifications}
        </div>
      );
    } else if (item.badge) {
      return (
        <div
          className={classnames(styles.badge, {
            [styles.free]: item.badge === "FREE",
            [styles.new]: item.badge === "NEW"
          })}
        >
          {item.badge}
        </div>
      );
    }
  }

  renderItem(item) {
    const { renderBadge } = this;
    const { onSelect } = this.props;
    const current =
      matchPath(location.pathname + location.hash, {
        path: item.route
      }) !== null;

    return (
      <NavLink
        className={classnames(styles.item, { [styles.current]: current })}
        activeClassName={styles.current}
        key={item.key}
        to={item.route}
        onClick={onSelect}
      >
        {item.label}
        {renderBadge(item)}
      </NavLink>
    );
  }

  render() {
    const { renderItem } = this;
    const { className, key, title, items } = this.props;

    return (
      <div className={className} key={key}>
        {items && (
          <Fragment>
            <span className={styles.heading}>{title}</span>
            {items.map(item => renderItem(item))}
          </Fragment>
        )}
      </div>
    );
  }
}

export default List;
