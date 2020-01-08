import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotions.module.scss';
import PromotionsBox1 from '../../common/PromotionsBox/PromotionsBox1';
import PromotionsBox2a from '../../common/PromotionsBox/PromotionsBox2a';
import PromotionsBox2b from '../../common/PromotionsBox/PromotionsBox2b';

class Promotions extends React.Component {
  state = {
    PromotionsBoxLeft: 7,
    PromotionsBoxRightUp: 8,
    PromotionsBoxRightDown: 2,
  };

  render() {
    const { products } = this.props;
    const { PromotionsBoxLeft } = this.state;
    const { PromotionsBoxRightUp } = this.state;
    const { PromotionsBoxRightDown } = this.state;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-sm-12'>
              {products.slice(PromotionsBoxLeft, PromotionsBoxLeft + 1).map(item => (
                <div key={item.id}>
                  <PromotionsBox1 {...item} />
                </div>
              ))}
            </div>
            <div className='col-lg-6 col-sm-12'>
              <div className='row'>
                <div className='col'>
                  <div className={styles.box}>
                    {products
                      .slice(PromotionsBoxRightUp, PromotionsBoxRightUp + 1)
                      .map(item => (
                        <div key={item.id}>
                          <PromotionsBox2a {...item} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className={styles.box}>
                    {products
                      .slice(PromotionsBoxRightDown, PromotionsBoxRightDown + 1)
                      .map(item => (
                        <div key={item.id}>
                          <PromotionsBox2b {...item} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promotions.propTypes = {
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

export default Promotions;
