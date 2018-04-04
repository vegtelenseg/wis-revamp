import React from 'react';

import PropTypes from 'prop-types';

export default class SearchView extends React.Component {
  isEnter = e => {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      const { activeTab, setItemName, fetchItemsThunk } = this.props;
      if (activeTab !== 'WATCHED') {
        setItemName(e.target.value);
        fetchItemsThunk(e.target.value, this.props);
      }
    }
    return;
  };
  filter(e) {
    const { activeTab, fetchItemsThunk } = this.props;
    if (activeTab === 'WATCHED') {
      fetchItemsThunk(e.target.value, this.props);
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
