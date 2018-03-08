import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <input type="text" style={{ position: 'absolute', zIndex: 9999 }} />
      </div>
    );
  }
}
