'use client';

import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${theme.color.white_100};
`;
