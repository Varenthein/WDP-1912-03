import React from 'react';
import PropTypes from 'prop-types';

import styles from './BrandsBox.module.scss';
// import Button from '../Button/Button';

const BrandsBox = ({ image }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img className={styles.image} src={image} alt='Ups...'></img>
    </div>
  </div>
);

BrandsBox.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
};

export default BrandsBox;
