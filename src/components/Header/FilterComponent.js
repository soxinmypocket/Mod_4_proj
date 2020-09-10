import React, { Component } from 'react';

class FilterComponent extends Component {
  state = {
    value: ""
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    }, () => this.props.handleSearchFilter(this.state.value))
    
  }
  render() {
    return (
      <div>
          <input onChange={this.handleChange} value={this.state.value} type="text" name="search" placeholder="...Search..."/>
      </div>
    );
  }
}

export default FilterComponent;