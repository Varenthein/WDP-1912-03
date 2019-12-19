import { connect } from 'react-redux';

import ProductBox from './ProductBox.js';

import { addToCompare } from '../../../redux/compareProducts.js';

const mapStateToProps = state => ({
  compare: 'state.stickyBar.products,',
});

const mapDispatchToProps = (dispatch, props) => ({
  addProduct: image => dispatch(addToCompare({
    image,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
