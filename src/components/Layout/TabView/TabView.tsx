import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Heading from '../Heading';
import style from './TabView.scss';

type Tab = {
  title: string;
  route: string;
  exact?: boolean;
  strict?: boolean;
};

class TabView extends Component<{
  heading: string;
  tabs: Tab[];
}> {
  renderTabs = (tabs: Tab[]) => (
    <React.Fragment>
      {tabs.map(tab => (
        <NavLink
          key={tab.route}
          className={style.tab}
          activeClassName={style.selected}
          to={tab.route}
          exact={tab.exact}
          strict={tab.strict}
          title={tab.title}
        >
          <span>{tab.title}</span>
        </NavLink>
      ))}
    </React.Fragment>
  );

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
