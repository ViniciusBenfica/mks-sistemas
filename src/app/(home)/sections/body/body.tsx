'use client';

import { IProducts } from '@/types/IProduct';
import { Container } from './body.styles';
import Card from '@/components/card/card';

export default function Body({ products }: { products: IProducts }) {
  return (
    <Container>
      {products.products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Container>
  );
}
