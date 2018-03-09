import React from 'react';

export default class Search extends React.Component {
  isEnter = e => {
    if (e.key === 'Enter') {
      this.props.setItemName(e.target.value);
      this.props.fetchItems(this.props.searchQuery);
    }
    return;
  };
  render() {
    return (
      <div className="search-container">
        <input id="search-input" type="text" onKeyPress={e => this.isEnter(e)} />
      </div>
    );
  }
}
