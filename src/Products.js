import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Products() {
  return (
    <>
      <section className='video-banner-section'>
        <div className='video-wrap'>
          <div className='embed-responsive embed-responsive-16by9 js-videoWrapper'>
            <iframe
              title='video'
              id='vschool-video'
              className='embed-responsive-item js-videoIframe'
              src=''
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope;'
              data-src='/assets/images/video/vschool-video.mp4'
            ></iframe>
            <div
              className='videoPoster js-videoPoster'
              style={{
                backgroundImage:
                  'url(/assets/images/products/vschool-video-thumb.jpg)',
              }}
            >
              <div className='videoPoster_overlay_hover'>
                <i className='video_play fa fa-play'></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='banner-section bg-product-banner'>
        <div className='banner-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <div className='banner-title text-center text-uppercase'>
                  <img src='assets/icons/vschool.png' alt='VSCHOOL TREND' />
                  <div className='hw pb-5'></div>
                  <h3>STUDY ANYTIME. ANYWHERE</h3>
                  <p className='banner-caption1 pt-2'>
                    With VSchool Trend Learning Program, education no longer
                    needs to be restricted by location and time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='main-landing-section'>
        <div
          id='carouselExampleIndicators'
          className='carousel slide'
          data-ride='carousel'
        >
          <ol className='carousel-indicators'>
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='0'
              className='active'
            ></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='3'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='4'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='5'></li>
          </ol>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <div className='carousel-image prdslideimg1'></div>
            </div>
            <div className='carousel-item'>
              <div className='carousel-image prdslideimg2'></div>
            </div>
            <div className='carousel-item'>
              <div className='carousel-image prdslideimg3'></div>
            </div>
            <div className='carousel-item'>
              <div className='carousel-image prdslideimg4'></div>
            </div>
            <div className='carousel-item'>
              <div className='carousel-image prdslideimg5'></div>
            </div>
            <div className='carousel-item'>
              <div className='carousel-image prdslideimg6'></div>
            </div>
          </div>
          <div className='carousel-caption'>
            <a
              className='text-uppercase white style2-btn'
              href='https://www.facebook.com/vschooltrend'
              rel='noopener noreferrer'
              target='_blank'
            >
              Find out more
            </a>
          </div>
          <a
            className='banner-prev carousel-control-prev'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            href='#carouselExampleIndicators'
            className='banner-next carousel-control-next'
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </section>

      <section className='explore-section bg-explore'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='explore-header text-center text-uppercase'>
                <h1>VSchool Trend Learning Program</h1>
                <p className='pt-3 pb-5'>
                  The Most Popular E-Learning Program In Malaysia
                </p>
                <NavLink to='https://www.vschooltrend.com'>
                  <a
                    className='style1-btn px-5 py-3'
                    target='_blank'
                    href='#findoutmore'
                  >
                    Find Out More
                  </a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
