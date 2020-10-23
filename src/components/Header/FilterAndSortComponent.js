import React, { Component } from 'react';
import SortComponent from './SortComponent'

class FilterAndSortComponent extends Component {
  render() {
    const {categories, handleSelectedCategory, handleSearchFilter} = this.props
    return (
      <div className="filter">
          <SortComponent categories={categories} handleSelectedCategory={handleSelectedCategory}/>
      </div>
    );
  }
}

export default FilterAndSortComponent;