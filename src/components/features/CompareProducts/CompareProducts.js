import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CompareProducts.module.scss';
import Button from '../../common/Button/Button';


const CompareProducts = ({products, removeProduct}) => (
  <div className={products.length ? styles.root : styles.none}>
    <div className={products.length ? styles.wrapper : styles.none}>
      {products.map( ({image}) =>
        <div className={styles.box}>
          <Button className={styles.compare}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exchange-alt" className="svg-inline--fa fa-exchange-alt fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path></svg>
          </Button>
          <div className={styles.foto}>
            <img src={image} alt='upss' />
            <Button onClick={ event => removeProduct(image) } className={styles.btn}>X</Button>
          </div>
        </div>
        )
      }
    </div>
  </div>
);

CompareProducts.propTypes = {
};

export default CompareProducts;
