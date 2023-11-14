import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '../../components/header/header';
import StyledComponentsRegistry from '@/lib/registry';
import '../globals.css';
import Footer from '../../components/footer/footer';
import CartProvider from '@/providers/shoppingCartProvider';
import 'react-loading-skeleton/dist/skeleton.css';
import { Layout } from './styles';

const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'MKS sistemas',
  description: 'MKS sistemas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <CartProvider>
            <Layout>
              <Header />
              {children}
              <Footer />
            </Layout>
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
