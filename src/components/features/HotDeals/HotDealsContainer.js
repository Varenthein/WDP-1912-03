import { connect } from 'react-redux';

import HotDeals from './HotDeals';

// import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  // categories: getAll(state),
  products: getNew(state),
});

export default connect(mapStateToProps)(HotDeals);
