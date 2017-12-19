import React from 'react';
import styled from 'styled-components';

const CONTACT_EMAIL = 'info@metalicoin.com';

const Email = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <Email href={`mailto:${CONTACT_EMAIL}`}>
    {CONTACT_EMAIL}
  </Email>
);
