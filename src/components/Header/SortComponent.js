import React, { Component } from 'react';

export default class SortComponent extends Component {
  render() {
    const {handleSelectedCategory, categories} = this.props
    return (
      <div>
          <select onChange={(e) => handleSelectedCategory(e.target.value)}>
              <option value="all">All</option>
              {
                categories.map(category => <option key={category} value={category}>{category}</option>)
              }
          </select>
      </div>
    );
  }
}