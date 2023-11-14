import { IProduct } from '@/types/IProduct';
import {
  CardFooter,
  CardContainer,
  ProductPrice,
  ProducTitle,
  ProductTitle,
  CardBody,
} from './card.styles';
import Image from 'next/image';
import { useCart } from '@/providers/shoppingCartProvider';

export default function Card({ product }: { product: IProduct }) {
  const { addItem, setCartOpen } = useCart();

  return (
    <CardContainer>
      <CardBody>
        <Image
          src={product.photo}
          alt='product image'
          width={138}
          height={100}
        />
        <div>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>
            {(+product.price).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
            })}
          </ProductPrice>
        </div>
        <ProducTitle>{product.description}</ProducTitle>
      </CardBody>
      <CardFooter
        onClick={() => {
          addItem(product), setCartOpen(true);
        }}
      >
        <Image src='/buy.svg' alt='buy icon' width={12} height={13} />
        <span>Comprar</span>
      </CardFooter>
    </CardContainer>
  );
}
