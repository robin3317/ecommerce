import React from 'react';

const CustomButton = ({ children, isGoogleRegister, ...otherProps }) => (
  <button
    className={`${isGoogleRegister ? `google-register` : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
