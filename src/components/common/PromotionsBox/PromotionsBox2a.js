import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotionsBox.module.scss';

const PromotionsBox2a = ({ image }) => (
  <div className={styles.root}>
    <div className={styles.photo2}>
      <img className={styles.image} src={image} alt='Ups...'></img>

      <div className={styles.content}>
        <h1>
          <span>OFFICE</span> CHAIR
        </h1>
        <span>COLLECTION</span>
        <p>$200.00</p>
      </div>
    </div>
  </div>
);

PromotionsBox2a.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
};

export default PromotionsBox2a;
