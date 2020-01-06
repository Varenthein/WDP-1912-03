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
  faAngleLeft,
  faAngleRight,
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
          <div className='col-md-12 col-lg-6'>
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

              <div className={styles.slider}>

                <div className={styles.btnGlr}>
                  <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                </div>

                <div className={styles.foto}>
                  <img src={products[0].image}></img>
                </div>
                <div className={styles.foto}>
                  <img src={products[1].image}></img>
                </div>
                <div className={styles.foto}>
                  <img src={products[2].image}></img>
                </div>
                <div className={styles.foto}>
                  <img src={products[3].image}></img>
                </div>
                <div className={styles.foto}>
                  <img src={products[4].image}></img>
                </div>

                <div className={styles.btnGlr}>
                  <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </div>

              </div>

              <div className={styles.price}>
                <div className={styles.text}>
                  <p>$1200</p>
                  <p className={styles.oldPrice}>$1200</p>
                </div>
              </div>

              <div className={styles.product}>
                <p>{products[0].name}</p>
                <div>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='#'>
                      {i <= products[0].name.stars ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-12 col-lg-6'>
            <div className={styles.foto}>
              <img src={products[7].image} />
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
