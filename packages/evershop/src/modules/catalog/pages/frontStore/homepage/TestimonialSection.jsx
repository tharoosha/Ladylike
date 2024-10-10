import React, { useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './TestimonialSection.scss';

export default function TestimonialSection() {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "Amritha De Silva",
      image: "/persons/TESTIMONIAL-01.jpg", // Replace with actual image path
      quote: "Being a person who has sensitive skin I have suffered with skin damage due to heavy makeup and climate. Having tried these vegan and cruelty-free products from British Cosmetics has given me drastic results on my skin within weeks. These products include a cleansing gel which is suitable for all skin types, The facial scrub which helps exfoliate your skin and helps with circulation, And The radiance mask which will help you reduce scars due to its antioxidant properties",
    },
    {
      name: "John Doe",
      image: "/persons/TESTIMONIAL-02.jpg", // Replace with actual image path
      quote: "I like my skincare products like I like my people Received three products from Prevense. I have been using for a few days now and I absolutely love them. All their products are vegan and cruelty-free! Their cleansing gel is suitable for all skin types and can be used daily. Facial scrub removes dead cells, improves circulation and exfoliates your skin!!⁣ Also if you know me you know how much I love face masks and I’m excited to use their radiance mask that gives results in 1 week! Yes in 1 week!",
    },
    // Add more testimonials if needed
  ];

  // Auto-scroll effect
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    if (slider) {
      scrollInterval = setInterval(() => {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        if (slider.scrollLeft < maxScrollLeft) {
          slider.scrollLeft += slider.clientWidth;
        } else {
          slider.scrollLeft = 0;
        }
      }, 5000); // Scroll every 5 seconds
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, []);

  return (
    <section className="container-fluid">
      <div className="testimonial-wrapper">
        <div className="testimonial-slider" ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <div className="testimonial-content">
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                  <p className="testimonial-name">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-nav">
          <ArrowBackIosIcon className="nav-arrow left-arrow" onClick={() => sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: 'smooth' })} />
          <ArrowForwardIosIcon className="nav-arrow right-arrow" onClick={() => sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' })} />
        </div>
      </div>
    </section>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 11
};
