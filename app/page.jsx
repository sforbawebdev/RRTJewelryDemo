import FooterSection from "@/component/footer/FooterSection";
import HeaderSection from "@/component/header/HeaderSection";
import DoorShopMain from "@/component/main/DoorShopMain";
import {
  firstBannerData as rawBannerData,
  brandList as rawBrandList,
  allProductList as rawProductList,
  blogList as rawBlogList,
  galleryList as rawGalleryList,
  doorCategories as rawDoorCategories
} from '@/data/Data';


export const metadata = {
  title: 'Verda - Door Shop',
  description: 'Developed by Raven Rock Technology',
};

export default async function HomePage() {
  return (
    <div className="fz-1-body">
      <HeaderSection />
      <DoorShopMain
        firstBannerData={rawBannerData}
        productStaticData={rawProductList}
        brandData={rawBrandList}
        galleryData={rawGalleryList}
        blogStaticData={rawBlogList}
        doorCategories={rawDoorCategories}
      />
      <FooterSection />
    </div>
  );
}
