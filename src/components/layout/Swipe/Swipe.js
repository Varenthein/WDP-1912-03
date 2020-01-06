import React from 'react';
import ReactSwipe from 'react-swipe';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import PropTypes from 'prop-types';

const Carousel = ({ pages, newPage, oldPage, name }) => {
  let reactSwipeEl;
  const nextName = `${name}-next`;
  const prevName = `${name}-prev`;
  function eventFire(el, etype) {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  if (newPage - oldPage > 0) {
    eventFire(document.getElementById(nextName), 'click');
  } else if (newPage - oldPage < 0) {
    eventFire(document.getElementById(prevName), 'click');
  }
  return (
    <div>
      <ReactSwipe
        className='carousel'
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >
        <div className='row' style={{ margin: '0 30px 0 0' }}>
          {pages.slice(0, 8).map(item => (
            <div key={item.id} className='col-3'>
              <ProductBox {...item} />
            </div>
          ))}
        </div>

        <div className='row'>
          {pages.slice(8, 16).map(item => (
            <div key={item.id} className='col-3'>
              <ProductBox {...item} />
            </div>
          ))}
        </div>

        <div className='row'>
          {pages.slice(16, 24).map(item => (
            <div key={item.id} className='col-3'>
              <ProductBox {...item} />
            </div>
          ))}
        </div>
      </ReactSwipe>
      <button
        style={{ display: 'none' }}
        id={nextName}
        onClick={() => reactSwipeEl.next()}
      >
        Next
      </button>
      <button
        style={{ display: 'none' }}
        id={prevName}
        onClick={() => reactSwipeEl.prev()}
      >
        Previous
      </button>
    </div>
  );
};

Carousel.propTypes = {
  pages: PropTypes.array,
  newPage: PropTypes.number,
  oldPage: PropTypes.number,
  name: PropTypes.string,
};

export default Carousel;
