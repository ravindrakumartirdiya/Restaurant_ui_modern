import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tegs }) => (
  <div className='app__menuitem'>
    <div className='app__menuite-head'>
      <div className='app__menuitem-name'>
        <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className='app__menuitem--line' />
      <div className='app__menuitem-price'>
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>
    <div className='app__menuitem-tegs'>
      <p className='p__opensan' style={{ color: '#AAA' }}>{tegs}</p>
    </div>
  </div>
);

export default MenuItem;
