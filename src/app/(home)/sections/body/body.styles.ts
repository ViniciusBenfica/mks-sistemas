'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 218px);
  grid-gap: 22px;
  padding: 50px 0;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 218px);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 218px);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
