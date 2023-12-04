import React from 'react';
import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__chef flex__center section__padding'>
    <div className='app__chef_section-img'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__chef_section-bio'>
      <div>
        <SubHeading title="Chef’s Word" />
        <p className='headtext__cormorant'>What we believe in</p>
      </div>
      <p className='p__opensans'><img src={images.quote} alt="dot" width={30} height={25} />Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      <div>
        <h4>Kevin Luo</h4>
        <p className='p__opensans'>Chef & Founder</p>
      </div>

      <img src={images.sign} alt="sign" width={100} height={50} />
    </div>
  </div>
);

export default Chef;
