import React from 'react';
import './FitGuideSection.scss';


export default function FitGuideSection() {
  return (
    <section className="fit-guide-section">
      <div className="fit-guide-container">
        <div className="fit-guide-image">
          <img src="/image.webp" alt="Model" />
        </div>
        <div className="fit-guide-text">
          <div className="fit-guide-icon">
            <img src="/image.webp" alt="Fit Guide Icon" />
          </div>
          <h1>Hey Gorgeous, in between sizes?</h1>
          <p>We got you covered.</p>
          <a href="/fit-guide" className="fit-guide-button">The Ultimate Fit Guide</a>
        </div>
      </div>
    </section>
  );
}



export const layout = {
    areaId: 'content',
    sortOrder: 17
  };
