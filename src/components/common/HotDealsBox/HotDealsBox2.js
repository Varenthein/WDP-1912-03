import React from 'react';
import PropTypes from 'prop-types';

import styles from './HotDealsBox2.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';

const HotDealsBox2 = ({ image }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img className={styles.image} src={image} alt='Ups...'></img>
      <div className={styles.buttons}>
        <Button className={styles.buttonCenter} variant='main'>
          SHOP NOW
        </Button>
      </div>
      <div className={styles.content}>
        <h1>
          INDOOR<span> FURNITURE</span>
        </h1>
        <p>SAVE UP TO 50% OF ALL FURNITURE</p>
      </div>
    </div>
  </div>
);

HotDealsBox2.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
};

export default HotDealsBox2;
