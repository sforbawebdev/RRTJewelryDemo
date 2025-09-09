import ShopMain from '@/component/main/ShopMain';
import Layout from '@/component/layout/Layout';

// For Next.js App Router (App Directory), use metadata instead of <Head>
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
    url: "https://your-jewelry-demo.com",
    siteName: "Aurora Jewelry",
    type: "website"
  }
};


export default function ShopPage() {
  return (
    <Layout>
      <ShopMain />
    </Layout>
  );
}
