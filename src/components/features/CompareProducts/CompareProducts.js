import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CompareProducts.module.scss';
import Button from '../../common/Button/Button';


const CompareProducts = ({products, removeProduct}) => (
  <div className={products.length ? styles.root : styles.none}>
    <div className={products.length ? styles.wrapper : styles.none}>
      {products.map( ({image}) =>
          <div className={styles.foto}>
            <img src={image} alt='upss' />
            <Button onClick={ event => removeProduct(image) } className={styles.btn}>X</Button>
          </div>
        )
      }
    </div>
  </div>
);

CompareProducts.propTypes = {
};

export default CompareProducts;
