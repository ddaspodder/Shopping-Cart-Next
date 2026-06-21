import { ProductDetailsPage } from "@/src/pages/product-details";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProductDetailsPage id={id} />;
}
