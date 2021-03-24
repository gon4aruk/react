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
    const { filterText, inStockOnly } = this.state;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          handleChange={this.handleChange}
          inStockOnly={inStockOnly}
        />
        <ProductTable 
          products={this.props.products}
          filterText={filterText}
          inStockOnly={inStockOnly} 
        />
      </div>
    );
  }
}

export default FilterableProductTable;
