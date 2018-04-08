import React from 'react';

import SearchView from '../../search/search.container';

export default class DiscountsView extends React.Component {
  render() {
    return (
      <div>
        <SearchView activeTab="DISCOUNTS" />
      </div>
    );
  }
}
