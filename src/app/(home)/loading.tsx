'use client';

import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

export const BodyContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 218px);
  grid-gap: 22px;

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

export const CardContainer = styled.div`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  padding: 12px;

  > div {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
  }
`;

export default function CardSkeleton() {
  return (
    <BodyContainer>
      {Array.from({ length: 8 }).map((_, index) => (
        <CardContainer key={index}>
          <Skeleton height={100} />
          <div>
            <Skeleton width={124} height={26} />
            <Skeleton width={64} height={26} />
          </div>
          <Skeleton />
        </CardContainer>
      ))}
    </BodyContainer>
  );
}
