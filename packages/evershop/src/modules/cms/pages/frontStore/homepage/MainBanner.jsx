import React, { useEffect, useRef } from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import './MainBanner.scss';

export default function MainBanner() {
  const sliderRef = useRef(null);

  // const text = _('Discount ${discount} For All Orders Over ${price}', {
  //   discount: '20%',
  //   price: '$2000'
  // });

  // Auto-scroll effect
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    if (slider) {
      scrollInterval = setInterval(() => {
        // Calculate new scroll position
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        if (slider.scrollLeft < maxScrollLeft) {
          slider.scrollLeft += slider.clientWidth;
        } else {
          slider.scrollLeft = 0;
        }
      }, 3000); // Adjust time (in milliseconds) as needed
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, []);

  return (
    <section className="container-fluid">
      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {/* <img id="slide-1" src="/banner_1.jpg" alt="" /> */}
          {/* <img id="slide-2" src="/banner_2.webp" alt="" /> */}
          {/* <img id="slide-3" src="/banner_3.jpg" alt="" /> */}
          <div className="slide">
            <img id="slide-1-img" src="/banner_1.jpg" alt="" />
            <div className="slider-content">
            <p className="slider-text">ENJOY 20% OFF SALE ITEMS</p>
              <a href="/men">
                <button className="slider-button">SHOP SALE</button>
              </a>
            </div>
          </div>

          <div className="slide">
            <img id="slide-2-img" src="/banner_2.webp" alt="" />
            <div className="slider-content">
            <p className="slider-text">NEW ARRIVALS FOR WOMEN</p>
              <a href="/women">
                <button className="slider-button">Discover More</button>
              </a>
            </div>
          </div>

          {/* <div id="slide-3" className="slide">
            <img id="slide-3-img" src="/banner_1.jpg" alt="" />
            <div className="slider-content">
              <a href="/men">
                <button className="slider-button">Shop Now</button>
              </a>
            </div>
          </div> */}
        </div>
        <div className="slider-nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          {/* <a href="#slide-3"></a> */}
          {/* <a href="#slide-3"></a> */}
        </div>
      </div>
    </section>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
