import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  Title,
  Subtitle,
} from './MenuItem.styles';

const MenuItem = ({ otherProps, history, match }) => {
  const { size, imageUrl, linkUrl, title } = otherProps;
  return (
    <MenuItemContainer
      size={size}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <BackgroundImageContainer
        imageUrl={imageUrl}
        className="background-image"
      />

      <ContentContainer className="content">
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
