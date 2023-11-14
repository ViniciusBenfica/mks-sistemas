'use client';

import { Container, Title } from './header.styles';
import ShoppingCart from '../shoppingCart/shoppingCart';

export default function Header() {
  return (
    <Container>
      <Title>
        MKS <span>Sistemas</span>
      </Title>
      <ShoppingCart />
    </Container>
  );
}
