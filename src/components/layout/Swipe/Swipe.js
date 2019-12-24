import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

const Carousel = ({children, newPage, oldPage, name}) => {
  let reactSwipeEl;
  const nextName = `${name}-next`;
  const prevName = `${name}-prev`;

  function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  if(newPage - oldPage > 0 ) {
    eventFire(document.getElementById(nextName), 'click');
    //reactSwipeEl.next() <------ my first idea, looks better without 'eventFire' but dosen't work that way
  }

  else if(newPage - oldPage < 0 ) {
    eventFire(document.getElementById(prevName), 'click');
    //reactSwipeEl.prev() <------ my first idea, looks better without 'eventFire' but dosen't work that way
  }

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>

      </ReactSwipe>
      <button style={{display: 'none'}} id={nextName} onClick={() => reactSwipeEl.next()}>Next</button>
      <button style={{display: 'none'}} id={prevName} onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};

export default Carousel;
