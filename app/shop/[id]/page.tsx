import AnalyticsRequester from "@/ApiRequest/AnalyticsRequester";
import { getSole } from "@/ApiRequest/GetData";
import LinkingBack from "@/Components/Reusables/LinkingBack";
import ShopForm from "@/Components/ShopForm/ShopForm";
import ShopImage from "@/Components/ShopForm/ShopImage";
import React from "react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const res = await getSole("shop", params?.id);
    return {
      title: res?.title,
      description: res?.description,
      openGraph: {
        title: res?.title,
        images: `https://nepatronix.org/api/files${res?.cover}`,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist!",
    };
  }
}

const page = async ({ params }: { params: any }) => {
  const data: any = await getSole("shop", params?.id);

  return (
    <main className="min-h-screen pt-[50px] md:pt-[60px] bg-gray-50">
      <AnalyticsRequester id={params?.id} />
      <section className="max-w-[1100px] mx-auto px-[10px] md:px-[20px] py-[20px] md:py-[30px]">
        <LinkingBack link="/shop" text="Back to Products" />

        <div className="grid md:grid-cols-2 gap-[20px] md:gap-[30px] bg-white rounded-[15px] p-[15px] md:p-[25px] shadow-md mt-[20px]">
          {/* Product Image */}
          <ShopImage oldData={[data?.cover, ...(data?.images || [])]} />

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-[24px] md:text-[30px] font-bold text-gray-900 mb-[10px]">
                {data?.title}
              </h1>
              <p className="text-[14px] md:text-[16px] text-gray-600 mb-[15px] leading-relaxed">
                {data?.description}
              </p>
              <div className="text-[20px] md:text-[24px] font-bold text-blue-600 mb-[20px]">
                NRs. {data?.price}
              </div>
            </div>
            <ShopForm itemData={data} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
