'use client';

import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.primary};
  width: 100%;
  min-height: 101px;
  padding: 0 88px;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    padding: 12px;
  }
`;

export const Title = styled.p`
  color: ${theme.color.white};
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  margin: 0;

  > span {
    font-size: 20px;
    font-weight: 300;
  }
`;
