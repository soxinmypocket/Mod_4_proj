import React, { Component } from 'react';
import SortComponent from './SortComponent'
//import FilterComponent from './FilterComponent'

class FilterAndSortComponent extends Component {
  render() {
    const {categories, handleSelectedCategory, handleSearchFilter} = this.props
    return (
      <div className="filter">
          <SortComponent categories={categories} handleSelectedCategory={handleSelectedCategory}/>
          {/* <FilterComponent handleSearchFilter={handleSearchFilter}/> */}
      </div>
    );
  }
}

export default FilterAndSortComponent;