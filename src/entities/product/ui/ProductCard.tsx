import Image from "next/image";

import { AddToCartButton } from "@/src/features/manage-cart/ui/AddToCartButton";
import styles from "./product-card.module.css";
import type { GetAllProductsResponse } from "@/src/shared/api/api-client";

type Product = GetAllProductsResponse["data"]["products"][number];

type ProductCardProps = {
  product: Product;
  showAddToCartButton?: boolean;
};

export const ProductCard = ({
  product,
  showAddToCartButton = false,
}: ProductCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src="/product-placeholder.svg"
          alt=""
          width={520}
          height={360}
          className={styles.image}
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>${Number(product.price).toFixed(2)}</p>
        {showAddToCartButton && <AddToCartButton productId={product.id} />}
      </div>
    </article>
  );
};
