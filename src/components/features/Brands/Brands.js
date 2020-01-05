import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';
import BrandsBox from '../../common/BrandsBox/BrandsBox';
// import Button from '../Button/Button';

class Brands extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    image: PropTypes.string,
  };

  state = {
    activeBrands: 0,
  };

  render() {
    const { brands } = this.props;
    const { activeBrands } = this.state;

    return (
      <div className={styles.root2}>
        <div className='container'>
          <div className='row'>
            {brands.slice(activeBrands, activeBrands + 6).map(item => (
              <div key={item.id} className='col-2'>
                <BrandsBox {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  children: PropTypes.node,
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
    })
  ),
};
export default Brands;
