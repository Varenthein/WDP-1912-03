import React from 'react';
import PropTypes from 'prop-types';

import styles from './HotDeals.module.scss';
import HotDealsBox from '../../common/HotDealsBox/HotDealsBox';
import HotDealsBox2 from '../../common/HotDealsBox/HotDealsBox2';

class HotDeals extends React.Component {
  state = {
    productHotDealsLeft: 3,
    productHotDealsRight: 0,
  };

  render() {
    const { products } = this.props;
    const { productHotDealsLeft } = this.state;
    const { productHotDealsRight } = this.state;

    return (
      <div className={styles.root2}>
        <div className='container'>
          <div className='row'>
            {products.slice(productHotDealsLeft, productHotDealsLeft + 1).map(item => (
              <div key={item.id} className='col-4'>
                <HotDealsBox {...item} />
              </div>
            ))}
            {products
              .slice(productHotDealsRight, productHotDealsRight + 1)
              .map(item => (
                <div key={item.id} className='col-8'>
                  <HotDealsBox2 {...item} />
                </div>
              ))}
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
