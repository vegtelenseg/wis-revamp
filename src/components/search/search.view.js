import React from 'react';

import PropTypes from 'prop-types';

export default class SearchView extends React.Component {
  isEnter = e => {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      if (this.props.activeTab !== 'WATCHED') {
        this.props.setItemName(e.target.value);
        this.props.fetchItemsThunk(this.props.searchQuery, this.props);
      }
    }
    return;
  };
  filter(e) {
    if (this.props.activeTab === 'WATCHED') {
      this.props.fetchItemsThunk(e.target.value, this.props);
    }
    return;
  }
  render() {
    return (
      <div className="search-container">
        <input
          id="search-input"
          type="text"
          onKeyPress={e => this.isEnter(e)}
          onKeyUp={e => this.filter(e)}
        />
      </div>
    );
  }
}

SearchView.propTypes = {
  value: PropTypes.string,
  setItemName: PropTypes.func.isRequired,
  fetchItemsThunk: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired
};
