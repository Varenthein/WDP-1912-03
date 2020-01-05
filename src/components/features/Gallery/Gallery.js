import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Gallery.module.scss';
import { Link } from 'react-router-dom';

const Gallery = ({categories, products} ) => {
  console.log(products);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-6 ' + styles.heading}>
              <h3>New furniture</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-6'>
            <div className={styles.cardMenu}>
              <ul>
                <li>FEATURED</li>
                <li>TOP SELLER</li>
                <li>SALE OFF</li>
                <li>TOP RATED</li>
              </ul>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.foto}>
                <img src={products[0].image}></img>
              </div>
              <div className={styles.iconBox}>
                <div className={styles.oneIcon}>
                  <FontAwesomeIcon icon={faHeadphones}></FontAwesomeIcon>
                </div>
                <div className={styles.oneIcon}>
                  <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                </div>
                <div className={styles.oneIcon}>
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </div>
                <div className={styles.oneIcon}>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  children: PropTypes.node,
};

export default Gallery;
