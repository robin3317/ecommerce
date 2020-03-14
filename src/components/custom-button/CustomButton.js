import React from 'react';

const CustomButton = ({
  children,
  isGoogleRegister,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${isGoogleRegister ? `google-register` : ''} ${
      inverted ? `inverted` : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
