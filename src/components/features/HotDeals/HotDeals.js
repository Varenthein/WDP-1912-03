import React from 'react';
import PropTypes from 'prop-types';

import styles from '../FeatureBoxes/FeatureBoxes.module.scss';
import HotDealsBox from '../../common/HotDealsBox/HotDealsBox';

class HotDeals extends React.Component {
  state = {
    productHotDeals: 2,
  };

  render() {
    const { products } = this.props;
    const { productHotDeals } = this.state;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            {products.slice(productHotDeals, productHotDeals + 1).map(item => (
              <div key={item.id} className='col-4'>
                <HotDealsBox {...item} />
              </div>
            ))}
            <div className='col-8'>
              <h5>
                INDOOR <span>FURNITURE</span>
              </h5>
              <p>SAVE UP TO 50% OF ALL FURNITURE</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HotDeals.propTypes = {
  children: PropTypes.node,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

export default HotDeals;
