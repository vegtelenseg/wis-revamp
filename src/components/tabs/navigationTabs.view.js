import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Map from '../map/map.container';
import Search from '../search/search.container';

export default class NavigationTabs extends React.Component {
  render() {
    console.log('Nav tabs: ', this.props);
    return (
      <Tabs className="tabs-container">
        <TabPanel className="tab-panel">
          <Search />
          <Map />
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
          <Tab className="tab" onClick={e => console.log('Clicked', e.target)}>
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
