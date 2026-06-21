import { getProducts } from "@/src/shared/api/client";
import type { ProductsQuery } from "@/src/shared/api/client/types.gen";

type ProductDetailsPageProps = {
  id?: string;
};

function ProductDetailsPage({ id }: ProductDetailsPageProps) {
  return (
    <section>
      <h1>Product Details</h1>
      <p>Product details slice placeholder component for product {id}.</p>
    </section>
  );
}

export { ProductDetailsPage };

export default ProductDetailsPage;
