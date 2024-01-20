import React from 'react';

const AboutUsHero = () => {
  return (
    <>
      {/* Existing About Hero content */}
      <div className="about-hero-head bg-blue-100 h-[500px] w-full flex items-center justify-between">
        <div className="text-left pl-8 pt-96">
          <div className="text-lg font-bold text-gray-700">OUR COMPANY</div>
        </div>
        <div className="text-right pr-8 pt-96">
          <h1 className="text-2xl font-bold about-hero-heading">
            We run all kinds of IT services that bring you {' '}
            <span className="gradient-heading text-3xl">success</span>
          </h1>
        </div>

      </div>

      {/* New About Hero Image section */}
      <div data-scroll-section="" data-scroll-section-id="section1" style={{ transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', opacity: 1, pointerEvents: 'all' }} data-scroll-section-inview="">
        <figure className="c-figure -parallax -full -lazy-load || c-hero-visual">
          <div className="c-figure_inner is-inview" data-scroll="" data-scroll-speed="-1" style={{ transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -42.0604, 0, 1)' }}>
            <img className="c-figure_image is-inview -lazy-loaded" data-scroll="" data-scroll-call="lazyLoad, Scroll" src="https://pave.ai/uploads/2_Technology/hero_%28dual-imageswith-scrolling-mask-effect-%28x2%29%29_woman_driving_2000_1200-1920w.jpg" data-src="uploads/2_Technology/hero_%28dual-imageswith-scrolling-mask-effect-%28x2%29%29_woman_driving_2000_1200-1920w.jpg" alt="Close-up of a person's eyes bathed in blue light with a streak of yellow over one eye" />
          </div>
        </figure>
      </div>
    </>
  );
};

export default AboutUsHero;
