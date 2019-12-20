import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <div>
        <ul>
          <li className={styles.select}>
            Select category
            <ul>
              <li>
                <a href='#'>FURNITURE</a>
              </li>
              <li>
                <a href='#'>CHAIR</a>
              </li>
              <li>
                <a href='#'>TABLE</a>
              </li>
              <li>
                <a href='#'>SOFA</a>
              </li>
              <li>
                <a href='#'>BEDROOM</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
