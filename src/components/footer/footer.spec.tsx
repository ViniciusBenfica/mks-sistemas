import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer component', () => {
  it('should render', () => {
    render(<Footer />);

    expect(
      screen.getByText('MKS sistemas © Todos os direitos reservados'),
    ).toBeDefined();
  });
});
