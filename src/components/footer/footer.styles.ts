'use client';

import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.footer`
  min-height: 34px;
  width: 100%;
  background-color: ${theme.color.white};
`;

export const Title = styled.p`
  color: #000;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;
