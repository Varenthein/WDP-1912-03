import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotions from '../../features/Promotions/PromotionsContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import HotDeals from '../../features/HotDeals/HotDealsContainer';

const Homepage = () => (
  <div className={styles.root}>
    <HotDeals />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Gallery />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
