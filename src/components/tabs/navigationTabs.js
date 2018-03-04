import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class NavigationTabs extends React.Component {
  render() {
    return (
      <Tabs className="tabs-container">
        <TabPanel className="tab-panel">
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel className="tab-panel">
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel className="tab-panel">
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel className="tab-panel">
          <h2>Any content 4</h2>
        </TabPanel>

        <TabList className="tabs-list">
          <Tab className="tab">
            <i class="fas fa-home" />
          </Tab>
          <Tab className="tab">
            <i class="fas fa-eye" />
          </Tab>
          <Tab className="tab">
            <i class="fas fa-tags" />
          </Tab>
          <Tab className="tab">
            <i class="fas fa-chart-line" />
          </Tab>
        </TabList>
      </Tabs>
    );
  }
}
