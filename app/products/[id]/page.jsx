import ProductDetailsMain from '@/component/main/ProductDetailsMain';
import { allProductList } from '@/data/Data';

export const metadata = {
  title: "Aurora Jewelry | Rings, Necklaces & Timeless Pieces",
  description:
    "Discover elegant rings, necklaces, bracelets, and earrings. Aurora Jewelry blends classic craftsmanship with modern design. Developed by Raven Rock Technology.",
  keywords: [
    "Aurora Jewelry",
    "jewelry shop",
    "rings",
    "necklaces",
    "bracelets",
    "earrings",
    "custom jewelry",
    "luxury jewelry",
    "fine jewelry",
    "handcrafted jewelry"
  ],
  openGraph: {
    title: "Aurora Jewelry | Timeless Elegance",
    description:
      "Handcrafted jewelry with gemstones, gold, and silver. Shine in every detail.",
    url: "",
    siteName: "Aurora Jewelry",
    type: "website"
  }
};

export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  // Find the individual product
  const product = allProductList.find(p => p.slug.toString() === id);

  if (!product) {
    // Optionally return a 404 or custom error UI
    return <p>Product not found</p>;
  }

  return <ProductDetailsMain product={product} allProduct={allProductList} />;
}
