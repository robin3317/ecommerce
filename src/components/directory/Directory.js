import React, { Component } from 'react';
import MenuItem from '../menu-item/MenuItem';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          size: 'normal',
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          size: 'normal',
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          size: 'normal',
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl:
            'https://i.ibb.co/89tmWfj/freestocks-org-ujd-Uqduw-Cls-unsplash.jpg',
          id: 4,
          size: 'large',
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: 5,
          size: 'large',
          linkUrl: 'shop/mens'
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} otherProps={otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
