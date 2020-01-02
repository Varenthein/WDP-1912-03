import React from 'react';
import PropTypes from 'prop-types';

// import {
//   faTruck,
//   faHeadphones,
//   faReplyAll,
//   faBullhorn,
// } from '@fortawesome/free-solid-svg-icons';

import styles from '../FeatureBoxes/FeatureBoxes.module.scss';
import HotDealsBox from '../../common/HotDealsBox/HotDealsBox';
// import { Link } from 'react-router-dom';

const HotDeals = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <HotDealsBox />
        </div>
        <div className='col-8'>
          <h5>24/7 customer</h5>
          <p>support</p>
        </div>
      </div>
    </div>
  </div>
);

HotDeals.propTypes = {
  children: PropTypes.node,
};

export default HotDeals;
