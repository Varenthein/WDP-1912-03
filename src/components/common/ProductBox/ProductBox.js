import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  name,
  price,
  oldPrice,
  promo,
  stars,
  image,
  addProduct,
  active,
}) => {
  let activeProducts = -1;
  if (typeof active !== 'undefined') activeProducts = active.indexOf(name);

  return (
    <div className={styles.root}>
      <FadeIn>
        <div className={styles.photo}>
          {promo && <div className={styles.sale}>{promo}</div>}
          <img className={styles.image} src={image} alt='Ups...'></img>
          <div className={styles.buttons}>
            <Button variant='small'>Quick View</Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
      </FadeIn>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button className={Math.floor(Math.random() * 2) ? styles.btnActive : ''}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            className={-1 !== activeProducts ? styles.btnActive : ''}
            onClick={event =>
              -1 !== activeProducts || active.length == 4
                ? window.alert("Can't add to compare")
                : addProduct(image, name)
            }
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            {oldPrice !== 0 && <span className={styles.oldPrice}>$ {oldPrice} </span>}${' '}
            {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  oldPrice: PropTypes.number,
  active: PropTypes.array,
  addProduct: PropTypes.func,
};

export default ProductBox;
