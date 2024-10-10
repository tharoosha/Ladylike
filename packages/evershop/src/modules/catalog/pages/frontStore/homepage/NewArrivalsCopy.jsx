import React from 'react';
import './NewArrivalsCopy.scss';

export default function NewArrivalsCopy() {
  return (
    <section className="salon-section">
      <div className="salon-container">
        {/* Card 1: Lifestyle Salon */}
        <div className="salon-card">
          <img
            src="/banner_1.jpg" // Replace with your actual image path
            alt="Lifestyle Salon"
            className="salon-image"
          />
          <div className="salon-overlay">
            <h3>BRITISH COSMETICS</h3>
            <h2>LIFESTYLE SALON</h2>
            <a href="/lifestyle-salon" className="salon-button">
              Explore
            </a>
          </div>
        </div>

        {/* Card 2: Nail Studios */}
        <div className="salon-card">
          <img
            src="/banner_3.jpg" // Replace with your actual image path
            alt="Nail Studios"
            className="salon-image"
          />
          <div className="salon-overlay">
            <h3>BRITISH COSMETICS</h3>
            <h2>NAIL STUDIOS</h2>
            <a href="/nail-studios" className="salon-button">
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 9
};
