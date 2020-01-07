import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromotionsBox.module.scss';

const PromotionsBox1 = ({ image }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img className={styles.image} src={image} alt='Ups...'></img>

      <div className={styles.content}>
        <h1>GUEST ROOM</h1>
        <p>SOFA</p>
        <span>-20%</span>
      </div>
    </div>
  </div>
);

PromotionsBox1.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
};

export default PromotionsBox1;
