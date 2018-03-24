import React from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

import ExploreViewContainer from './explore/explore.container';
import DiscountsViewContainer from './discounts/discounts.container';
import WatchedViewContainer from './watched/watched.container';

export default class NavigationTabsView extends React.Component {
  render() {
		const { numberOfWatchedItems } = this.props;
    return (
      <Tabs className="tabs-container" renderActiveTabContentOnly={true}>
        <TabContent for="exploreView">
          <ExploreViewContainer />
        </TabContent>
        <TabContent for="watchedView">
          <WatchedViewContainer />
        </TabContent>
        <TabContent for="discountsView">
          <DiscountsViewContainer />
        </TabContent>

        <div className="tabs-list">
          <TabLink activeClassName="active" className="tab" to="exploreView">
            <i className="fas fa-home" />
          </TabLink>
          <TabLink activeClassName="active" className="tab" to="watchedView">
						<div className="number-of-watched-items-container">
							<span className="number-of-watched-items">{numberOfWatchedItems}</span>
						</div>
            <i className="fas fa-eye" />
          </TabLink>
          <TabLink activeClassName="active" className="tab" to="discountsView">
            <i className="fas fa-tags" />
          </TabLink>
          <TabLink
            activeClassName="active"
            className="tab"
            to="improvementsView"
          >
            <i className="fas fa-chart-line" />
          </TabLink>
        </div>
      </Tabs>
    );
  }
}
