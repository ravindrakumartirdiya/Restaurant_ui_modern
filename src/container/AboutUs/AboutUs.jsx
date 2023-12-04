import React from 'react';
import { SubHeading } from '../../components';
import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__about flex__center section__padding' id='about'>
    <div className='app__about_info'>
      <h1 className='headtext__cormorant'>About Us</h1>
      <div className='app__about_rotate-sec'>
      <SubHeading />
      </div>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__about_img'>
      <img src={images.knife} alt="knife" />
    </div>
    <img className='app__about__img-g' src={images.G} alt="g" />
    <div>
      <div className='app__about_info-sec2'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <SubHeading />
        <p className='p__opensans' style={{ margin: '2rem 0' }}>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
