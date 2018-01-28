import React from 'react';
import styled from 'styled-components';
import googleBtnImg from '../google-btn-img.png';

const GoogleButton = () => (
  <a href={'http://localhost:5000/auth/google'}>
    <GoogleImage src={googleBtnImg} />
  </a>
);

const GoogleImage = styled.img`
  width: 150px;

  &:active {
    opacity: 0.9;
  }
`;

export default GoogleButton;
