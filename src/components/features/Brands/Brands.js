import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';
import BrandsBox from '../../common/BrandsBox/BrandsBox';
import Button from '../../common/Button/Button';

class Brands extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    image: PropTypes.string,
  };

  state = {
    activeBrands: 0,
  };

  handleSliderChange(newBrandsMove) {
    this.setState({ activeBrands: newBrandsMove });
  }

  render() {
    const { brands } = this.props;
    const { activeBrands } = this.state;
    // const { brandsMove } = this.state;

    return (
      <div className={styles.root}>
        <div className='container'>
          <hr className={styles.line} />
          <div className={styles.actions}>
            <div className='d-sm-none d-lg-block'>
              <Button
                className={styles.buttonSliderLeft}
                variant='buttonLeft'
                onClick={() => this.handleSliderChange(activeBrands - 6)}
              >
                {'<'}
              </Button>
            </div>
          </div>
          <div className='row'>
            {brands.slice(activeBrands, activeBrands + 6).map(item => (
              <div key={item.id} className='col-2 d-sm-none d-lg-block'>
                <BrandsBox {...item} />
              </div>
            ))}
            {brands.slice(activeBrands, activeBrands + 2).map(item => (
              <div key={item.id} className='col-6 d-lg-none d-sm-block'>
                <BrandsBox {...item} />
              </div>
            ))}
          </div>
          <div className={styles.actions}>
            <div className='d-sm-none d-lg-block'>
              <Button
                className={styles.buttonSliderRight}
                variant='buttonRight'
                onClick={() => this.handleSliderChange(activeBrands + 6)}
              >
                {'>'}
              </Button>
            </div>
          </div>
          <hr className={styles.line} />
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
