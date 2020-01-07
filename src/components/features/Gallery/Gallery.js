import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

import {
  faHeadphones,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Gallery.module.scss';

class Gallery extends React.Component {
  state = {
    activePage: 'FEATURED',
    activeCategory: 'bed',
    photoGalery: 'https://picsum.photos/200/300',
    sliderStart: 0,
    sliderEnd: 6,
  };

  cutGalleryLeft(photo) {
    if (this.state.photoGalery === '') this.setPhoto(photo);
    this.setState({
      sliderStart: 6,
      sliderEnd: 12,
    });
  }

  cutGalleryRigth() {
    this.setState({
      sliderStart: 0,
      sliderEnd: 6,
    });
  }

  setPhoto(photo) {
    this.setState({ photoGalery: photo });
  }

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
    this.setState({ photoGalery: '' });
    this.cutGalleryRigth();
  }

  render() {
    const { products } = this.props;
    const menuTitels = ['FEATURED', 'TOP SELLER', 'SALE OFF', 'TOP RATED'];
    const titels = [];
    for (let i = 0; i < 4; i++) {
      titels.push(
        <li
          onClick={() => this.handlePageChange(menuTitels[i])}
          className={menuTitels[i] === this.state.activePage ? styles.active : ''}
        >
          {menuTitels[i]}
        </li>
      );
    }
    const galleryProducts = products.filter(({ gallery }) => gallery === true);
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-6 ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 col-lg-6'>
              <div className={styles.cardMenu}>
                <ul>{titels}</ul>
              </div>
              {galleryProducts.map(
                ({ galleryId, image, name, stars, galleryPhoto }) => {
                  const cutGallery = galleryPhoto.slice(
                    this.state.sliderStart,
                    this.state.sliderEnd
                  );
                  return (
                    <div
                      key={name}
                      className={
                        galleryId === this.state.activePage
                          ? styles.display
                          : styles.none
                      }
                    >
                      <div className={styles.cardBody}>
                        <div className={styles.foto}>
                          <img
                            src={
                              this.state.photoGalery.length
                                ? this.state.photoGalery
                                : cutGallery[0]
                            }
                            alt='ups'
                          ></img>
                        </div>

                        <div className={styles.iconBox}>
                          <div className={styles.oneIcon}>
                            <FontAwesomeIcon icon={faHeadphones}></FontAwesomeIcon>
                          </div>
                          <div className={styles.oneIcon}>
                            <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                          </div>
                          <div className={styles.oneIcon}>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                          </div>
                          <div className={styles.oneIcon}>
                            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                          </div>
                        </div>

                        <div className={styles.slider}>
                          <div
                            onClick={event => this.cutGalleryRigth()}
                            className={styles.btnGlr}
                          >
                            <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                          </div>

                          {cutGallery.map(photo => (
                            <div
                              key={photo}
                              onClick={event => this.setPhoto(photo)}
                              className={styles.foto}
                            >
                              <div
                                className={
                                  photo === this.state.photoGalery ||
                                  (this.state.photoGalery === '' &&
                                    photo === cutGallery[0])
                                    ? ''
                                    : styles.disActive
                                }
                              >
                                <img src={photo} alt='ups'></img>
                              </div>
                            </div>
                          ))}

                          <div
                            onClick={event => {
                              this.cutGalleryLeft(cutGallery[0]);
                            }}
                            className={styles.btnGlr}
                          >
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          </div>
                        </div>

                        <div className={styles.price}>
                          <div className={styles.text}>
                            <p>$1200</p>
                            <p className={styles.oldPrice}>$1200</p>
                          </div>
                        </div>

                        <div className={styles.product}>
                          <p>{name}</p>
                          <div>
                            {[1, 2, 3, 4, 5].map(i => (
                              <a key={i} href='#'>
                                {i <= stars ? (
                                  <FontAwesomeIcon icon={faStar}>
                                    {i} stars
                                  </FontAwesomeIcon>
                                ) : (
                                  <FontAwesomeIcon icon={farStar}>
                                    {i} stars
                                  </FontAwesomeIcon>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className='col-md-12 col-lg-6 my-sm-4 my-lg-0'>
              <div className={styles.fotoBody} styles='margin: 35px'>
                <div className={styles.foto}>
                  <img src={products[7].image} alt='ups' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  children: PropTypes.node,
  products: PropTypes.array,
};

export default Gallery;
