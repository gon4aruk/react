import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
  }

  handleChange = event => {
    const { value, checked } = event.target;
    event.target.type === 'checkbox'
      ? this.setState({ ...this.state, inStockOnly: checked })
      : this.setState({ ...this.state, filterText: value });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          handleChange={this.handleChange}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable 
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} 
        />
      </div>
    );
  }
}

export default FilterableProductTable;
