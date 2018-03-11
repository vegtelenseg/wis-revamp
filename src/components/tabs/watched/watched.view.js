import React from 'react';

import Search from '../../search/search.container';

export default class WatchedView extends React.Component {
  render() {
    return (
      <div>
        <Search activeTab="WATCHED" />
      </div>
    );
  }
}
