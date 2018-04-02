import React from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

import ExploreViewContainer from './explore/explore.container';
import DiscountsViewContainer from './discounts/discounts.container';
import WatchedViewContainer from './watched/watched.container';

export default class NavigationTabsView extends React.Component {
  render() {
    const { numberOfWatchedItems } = this.props;
    return (
      <Tabs className="tabs-container">
        <TabContent for="exploreView">
          <ExploreViewContainer numberOfWatchedItems={numberOfWatchedItems} />
        </TabContent>
        <TabContent for="watchedView">
          <WatchedViewContainer numberOfWatchedItems={numberOfWatchedItems} />
        </TabContent>
        <TabContent for="discountsView">
          <DiscountsViewContainer />
        </TabContent>

        <div className="tabs-list">
          <TabLink
            activeClassName="active-tab"
            className="tab"
            to="exploreView"
          >
            <div className="tab-indicator">
              <i className="fas fa-home" />
              <span>explore</span>
            </div>
          </TabLink>
          <TabLink
            activeClassName="active-tab"
            className="tab"
            to="watchedView"
          >
            <div className="number-of-watched-items-container">
              <span className="number-of-watched-items">
                {numberOfWatchedItems}
              </span>
            </div>
            <div className="tab-indicator">
              <i className="fas fa-eye" />
              <span>watched</span>
            </div>
          </TabLink>
          <TabLink
            activeClassName="active-tab"
            className="tab"
            to="discountsView"
          >
            <div className="tab-indicator">
              <i className="fas fa-tags" />
              <span>discounts</span>
            </div>
          </TabLink>
          <TabLink
            activeClassName="active-tab"
            className="tab"
            to="improvementsView"
          >
            <div className="tab-indicator">
              <i className="fas fa-chart-line" />
              <span>suggestions</span>
            </div>
          </TabLink>
        </div>
      </Tabs>
    );
  }
}
