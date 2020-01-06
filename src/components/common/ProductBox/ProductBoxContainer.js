import { connect } from 'react-redux';

import ProductBox from './ProductBox.js';

import { addToCompare, getActiveProducts } from '../../../redux/compareProducts.js';

const mapStateToProps = (state, props) => ({
  active: getActiveProducts(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  addProduct: (image, name) => dispatch(addToCompare({
    image: image,
    id: name
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
