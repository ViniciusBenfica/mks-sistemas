'use client';

import Image from 'next/image';
import {
  CartIcon,
  CartContainer,
  CartBody,
  CloseCart,
  CartHeader,
  Products,
  ProductQuantityInput,
  ProductName,
  ProductPrice,
  DeleteProduct,
  ProductQuantity,
  Price,
  FinishBuy,
  EmptyCart,
} from './shoppingCart.styles';
import { useCart } from '@/providers/shoppingCartProvider';

export default function ShoppingCart() {
  const {
    cartItems,
    incrementItem,
    decrementItem,
    updateItemQuantity,
    removeItem,
    getCartTotal,
    getCartTotalItems,
    cartOpen,
    setCartOpen,
  } = useCart();

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div>
      <CartIcon onClick={handleCartToggle}>
        <Image
          src='/shoppingCart.svg'
          alt='shoppingCart icon'
          width={19}
          height={18}
        />
        <p>{getCartTotalItems()}</p>
      </CartIcon>
      <CartContainer isOpen={cartOpen}>
        <CartHeader>
          <p>Carrinho de compras</p>
          <CloseCart onClick={handleCartToggle}>
            <Image src='/close.svg' alt='close icon' width={38} height={38} />
          </CloseCart>
        </CartHeader>
        <CartBody>
          {cartItems.length === 0 ? (
            <EmptyCart>Carrinho Vazio</EmptyCart>
          ) : (
            cartItems?.map(({ product, quantity }) => (
              <Products key={product.id}>
                <Image
                  src={product.photo}
                  alt='product image'
                  width={50}
                  height={50}
                />
                <ProductName>{product.name}</ProductName>
                <div>
                  <ProductQuantity>Qtd:</ProductQuantity>
                  <ProductQuantityInput>
                    <button
                      onClick={() => quantity > 1 && decrementItem(product.id)}
                    >
                      <Image
                        src='/decrementItem.svg'
                        alt='decrement item icon'
                        width={8}
                        height={8}
                      />
                    </button>
                    <hr />
                    <input
                      onChange={(e) => {
                        const value = +e.target.value;
                        if (!isNaN(value)) {
                          const newQuantity = Math.max(1, value);
                          updateItemQuantity(product.id, newQuantity);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (isNaN(Number(e.key)) && e.key !== 'Backspace') {
                          e.preventDefault();
                        }
                      }}
                      onFocus={(e) => e.target.select()}
                      id='quantity'
                      name='quantity'
                      value={quantity}
                    />
                    <hr />
                    <button onClick={() => incrementItem(product.id)}>
                      <Image
                        src='/incrementItem.svg'
                        alt='increment item icon'
                        width={8}
                        height={8}
                      />
                    </button>
                  </ProductQuantityInput>
                </div>
                <ProductPrice>
                  {(+product.price * quantity).toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                  })}
                </ProductPrice>
                <DeleteProduct onClick={() => removeItem(product.id)}>
                  <Image
                    src='/close.svg'
                    alt='close icon'
                    width={18}
                    height={18}
                  />
                </DeleteProduct>
              </Products>
            ))
          )}
        </CartBody>
        <div>
          <Price>
            <p>Total</p>
            <p>
              {getCartTotal()?.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </Price>
          <FinishBuy>Finalizar Compra</FinishBuy>
        </div>
      </CartContainer>
    </div>
  );
}
