import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ otherProps, history, match }) => {
  const { size, imageUrl, linkUrl, title } = otherProps;
  return (
    <div
      className={size ? `${size} menu-item` : 'menu-item'}
      onClick={() => {
        console.log(match);
        console.log(history);
        console.log(linkUrl);
        history.push(`${match.url}${linkUrl}`);
      }}
    >
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
};

export default withRouter(MenuItem);
