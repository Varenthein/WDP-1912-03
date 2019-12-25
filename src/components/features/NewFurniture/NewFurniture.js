import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Carousel from '../../layout/Swipe/Swipe';

class NewFurniture extends React.Component {

  state = {
    activePage: 0,
    oldPage: 0,
    activeCategory: 'bed',
  };

   _state = { swiped: false };
   _swipe = {};
   minDistance = 50;

  _onTouchStart(e) {
    const touch = e.touches[0];
    this._swipe = { x: touch.clientX };
    this.setState({ swiped: false });
  }

  _onTouchMove(e) {
    if (e.changedTouches && e.changedTouches.length) {
      const touch = e.changedTouches[0];
      this._swipe.swiping = true;
    }
  }

  _onTouchEnd(e) {
    const touch = e.changedTouches[0];
    const absX = Math.abs(touch.clientX - this._swipe.x);
    if (this._swipe.swiping && absX > this.minDistance ) {
      this.props.onSwiped && this.props.onSwiped();
      this.setState({ swiped: true });
    }
    this._swipe = {};
  }

  handlePageChange(newPage) {
    this.setState({ oldPage: this.state.activePage });
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    console.log(categoryProducts);
    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Carousel
          newPage={this.state.activePage}
          oldPage={this.state.oldPage}
          name={'NewFurniture'}>
            <div className='row'
            onTouchStart={this._onTouchStart}
            onTouchMove={this._onTouchMove}
            onTouchEnd={this._onTouchEnd}
            >
              {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
                <div key={item.id} className='col-3'>
                  <ProductBox {...item} />
                </div>
              ))}
            </div>
            </Carousel>
            {`Component-${this.state.swiped ? 'swiped' : ''}`}

        </div>
      </div>

    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
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

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
