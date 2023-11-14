import { url } from '@/utils/url';
import { IProducts } from '@/types/IProduct';
import Body from './sections/body/body';

async function getAllProducts(): Promise<IProducts> {
  try {
    const response = await fetch(
      `${url}/products?page=1&rows=8&sortBy=id&orderBy=DESC`,
    );
    return response.json();
  } catch (error) {
    return { products: [] };
  }
}

export default async function Home() {
  const response = await getAllProducts();
  return (
    <main>
      <Body products={response} />
    </main>
  );
}
