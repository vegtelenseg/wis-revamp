import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ExloreViewContainer from './explore/explore.container';
import DiscountsViewContainer from './discounts/discounts.container';
import WatchedViewContainer from './watched/watched.container';

export default class NavigationTabs extends React.Component {
  render() {
    return (
      <Tabs className="tabs-container">
        <TabPanel className="tab-panel">
          <ExloreViewContainer />
        </TabPanel>
        <TabPanel className="tab-panel">
          <WatchedViewContainer />
        </TabPanel>
        <TabPanel className="tab-panel">
          <DiscountsViewContainer />
        </TabPanel>
        <TabPanel className="tab-panel">
          <h2>Any content 4</h2>
        </TabPanel>

        <TabList className="tabs-list">
          <Tab className="tab">
            <i className="fas fa-home" />
          </Tab>
          <Tab className="tab">
            <i className="fas fa-eye" />
          </Tab>
          <Tab className="tab">
            <i className="fas fa-tags" />
          </Tab>
          <Tab className="tab">
            <i className="fas fa-chart-line" />
          </Tab>
        </TabList>
      </Tabs>
    );
  }
}
