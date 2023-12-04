import React from 'react';
import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

const SpecialMenu = () => (
  <div className='app_specialMenu flex__center section__padding' id='menu'>
    <div className='app_specialMenu-title'>
      <SubHeading title="Menu that fits you palatte" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app_specialMenu-menu'>
      <div className='app_specialMenu_menu-wine flex__center'>
        <p className='app_specialMenu_menu_heading'>Wine & Beer</p>
        <div className='app_specialMenu_menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tegs={wine.tags} />
          ))}
        </div>
      </div>

      <div className='app_specialMenu-menu-img'>
        <img src={images.menu} alt="menu img" />
      </div>

      <div className='app_specialMenu_menu-cocktails flex__center'>
        <p className='app_specialMenu_menu_heading'>Cocktails</p>
        <div className='app_specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tegs={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <button type='button' className='custom__button'>View More</button>

  </div>
);

export default SpecialMenu;
