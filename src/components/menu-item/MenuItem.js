import React from 'react';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={size ? `${size} menu-item` : 'menu-item'}>
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    ></div>

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
