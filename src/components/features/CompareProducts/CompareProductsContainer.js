import { connect } from 'react-redux';

import CompareProducts from './CompareProducts';
import { removeFromCompare } from '../../../redux/compareProducts.js';

const mapStateToProps = state => ({
  products: state.compare.products,
});

const mapDispatchToProps = (dispatch, props) => ({
  removeProduct: image => dispatch(removeFromCompare(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareProducts);
