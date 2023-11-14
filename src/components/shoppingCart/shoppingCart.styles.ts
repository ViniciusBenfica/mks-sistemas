'use client';

import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const CartIcon = styled.button`
  all: unset;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background: ${theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  > p {
    color: #000;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const EmptyCart = styled.p`
  color: ${theme.color.white};
  font-size: 20px;
  font-weight: 700;
`;

interface CartContainerProps {
  isOpen: boolean;
}

export const CartContainer = styled.div<CartContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 486px;
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  background: ${theme.color.primary};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const CartBody = styled.div`
  overflow-y: scroll;
  height: 100%;
  padding: 10px 47px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;

export const CloseCart = styled.button`
  all: unset;
  width: 38px;
  height: 38px;
  cursor: pointer;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.color.white};
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  padding: 0px 47px;
`;

export const FinishBuy = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 97px;
  background: ${theme.color.black};
  color: ${theme.color.white};
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
`;

export const DeleteProduct = styled.button`
  all: unset;
  position: absolute;
  right: -5px;
  top: -15px;
  cursor: pointer;
`;

export const ProductName = styled.div`
  color: ${theme.color.gray_100};
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  width: 113px;
`;

export const ProductPrice = styled.div`
  color: ${theme.color.black};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 47px;

  > p {
    color: ${theme.color.white};
    font-size: 27px;
    font-weight: 700;
    width: 180px;
  }
`;

export const ProductQuantity = styled.p`
  color: ${theme.color.black};
  font-size: 5px;
  font-weight: 400;
  margin-top: -10px;
`;

export const Products = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.color.white};
  font-size: 27px;
  font-weight: 700;
  border-radius: 8px;
  background: ${theme.color.white};
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  width: 100%;
  min-height: 95px;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const ProductQuantityInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  background: ${theme.color.white};
  width: 50px;
  height: 19px;
  color: #000;
  font-size: 8px;
  font-weight: 400;

  > button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer !important;
    height: 100%;
    width: 100%;
  }

  > input {
    all: unset;
    text-align: center;
    width: 20px;
    height: 100%;
  }

  > hr {
    height: 30%;
    border: none;
    border-left: 1px solid ${theme.color.gray_300};
  }
`;
