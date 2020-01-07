import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotionsBox.module.scss';

const PromotionsBox2b = ({ image }) => (
  <div className={styles.root}>
    <div className={styles.photo2}>
      <img className={styles.image} src={image} alt='Ups...'></img>

      <div className={styles.content}>
        <p>
          <span>SPECIAL</span> COLLECTION
        </p>
        <h5>SAVE UP 45% OF FURNITURE</h5>
      </div>
    </div>
  </div>
);

PromotionsBox2b.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
};

export default PromotionsBox2b;
