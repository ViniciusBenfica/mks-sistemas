import { fireEvent, render, screen } from '@testing-library/react';
import Card from './card';
import '@testing-library/jest-dom';
import { CartContext } from '@/providers/shoppingCartProvider';
import { ICart } from '@/types/ICart';

interface RenderComponentProps {
  product?: {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
  };

  functions?: {
    setCartOpen?: () => void;
    addItem?: () => void;
    incrementItem?: () => void;
    decrementItem?: () => void;
    updateItemQuantity?: () => void;
    removeItem?: () => void;
    getCartTotal?: () => number;
    getCartTotalItems?: () => number;
    cartItems?: ICart[];
    cartOpen?: boolean;
  };
}

const renderComponent = ({ product, functions }: RenderComponentProps) => {
  const mockProduct = product || {
    id: 1,
    name: 'name',
    brand: 'brand',
    description: 'description',
    photo:
      'https://img.freepik.com/premium-photo/couple-love-postcard-valentine-s-day-generative-ai_791958-21.jpg',
    price: '10',
  };

  const mockContextValue = {
    cartItems: [],
    setCartItems: jest.fn(),
    addItem: jest.fn(),
    incrementItem: jest.fn(),
    decrementItem: jest.fn(),
    updateItemQuantity: jest.fn(),
    removeItem: jest.fn(),
    getCartTotal: jest.fn(),
    getCartTotalItems: jest.fn(),
    cartOpen: false,
    setCartOpen: jest.fn(),
    ...functions,
  };

  render(
    <CartContext.Provider value={mockContextValue}>
      <Card product={mockProduct} />
    </CartContext.Provider>,
  );
};

describe('Card component', () => {
  it('should open cart', () => {
    const setCartOpen = jest.fn();

    renderComponent({
      functions: { setCartOpen },
    });

    const bntAddItemInCart = screen.getByText('Comprar');
    fireEvent.click(bntAddItemInCart);

    expect(setCartOpen).toHaveBeenCalledWith(true);
  });

  it('should add item in cart', () => {
    const addItem = jest.fn();
    const cartItems: ICart[] = [];

    const mockProduct = {
      id: 1,
      name: 'name',
      brand: 'brand',
      description: 'description',
      photo:
        'https://img.freepik.com/premium-photo/couple-love-postcard-valentine-s-day-generative-ai_791958-21.jpg',
      price: '10',
    };

    renderComponent({
      product: mockProduct,
      functions: { addItem, cartItems },
    });

    const bntAddItemInCart = screen.getByText('Comprar');
    fireEvent.click(bntAddItemInCart);

    expect(addItem).toHaveBeenCalledWith(mockProduct);

    const updatedCartItems = screen.getByText(mockProduct.name);
    expect(updatedCartItems).toBeInTheDocument();
  });
});
