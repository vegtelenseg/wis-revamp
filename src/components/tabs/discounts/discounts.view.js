import React from 'react';

import Search from '../../search/search.container';

export default class DiscountsView extends React.Component {
  render() {
    return (
      <div>
        <Search activeTab="DISCOUNTS" />
      </div>
    );
  }
}
