'use client';

import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  overflow: hidden;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.color.white};
  height: 253px;
  padding: 12px;
  box-sizing: border-box;

  > div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    justify-content: space-between;
  }
`;

export const ProductTitle = styled.p`
  color: ${theme.color.gray_100};
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`;

export const ProducTitle = styled.p`
  color: ${theme.color.gray_100};
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  box-sizing: border-box;
  height: 26px;
  border-radius: 5px;
  background: ${theme.color.gray_200};
  color: ${theme.color.white};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
`;

export const CardFooter = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 218px;
  height: 31px;
  background: ${theme.color.primary};
  cursor: pointer;

  > span {
    color: ${theme.color.white};
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
