import React, { useEffect } from 'react';
import './ScrollingBanner.scss';

export default function ScrollingBanner() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="scroller" data-speed="slow">
      <div className="scroller__inner">
        <span>Look Good,   Feel Good,   Do Good &bull;</span>
        <span>Look Good,   Feel Good,   Do Good &bull;</span>
        <span>Look Good,   Feel Good,   Do Good &bull;</span>
        <span>Look Good,   Feel Good,   Do Good &bull;</span>
        <span>Look Good,   Feel Good,   Do Good &bull;</span>

        {/* More repeated text if needed */}
      </div>
    </div>
  );
}


export const layout = {
  areaId: 'content',
  sortOrder: 20
};