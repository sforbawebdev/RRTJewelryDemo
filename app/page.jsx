import FooterSection from '@/component/footer/FooterSection';
import HeaderSection from '@/component/header/HeaderSection';
import JewelleryShopMain from '@/component/main/JewelleryShopMain';

import {
  ornamentList as rawOrnamentsData,
  testimonialSliderList as rawTestimonialData,
  jewelleryGallery as rawJewelleryGallery,
  blogList as rawBlogData
} from '@/data/Data';


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

export default async function JewelleryShopPage() {

  return (
    <div className="fz-1-body">
      <HeaderSection />
      <JewelleryShopMain
        ornamentsData={rawOrnamentsData}
        testimonialStaticData={rawTestimonialData}
        jewelleryGalleryStaticData={rawJewelleryGallery}
        blogStaticData={rawBlogData}
      />
      <FooterSection />
    </div>
  );
}
