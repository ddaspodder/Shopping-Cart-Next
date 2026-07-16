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
