import { connect } from 'react-redux';

import Brands from './Brands';

// import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  // categories: getAll(state),
  brands: getNew(state),
});

export default connect(mapStateToProps)(Brands);
