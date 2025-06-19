"use client";
import { Search } from "@/ApiRequest/PostReqs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
const ShopSearch = () => {
  const [data, setData] = useState("");
  const redirect = useRouter();

  const path = usePathname();
  const isShop = path.includes("/shop");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = await Search(data);
    if (!newData?.error) {
      return redirect.push(`/shop/${newData?.url}`);
    }
    return alert("404 Could not find Requested Product!");
  };

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const localData = localStorage.getItem("cart");
    const parsed = JSON.parse(localData || "[]");

    let q = parsed?.length;
    let finalqty = 0;
    if (q != 0) {
      for (let i = 0; i < parsed?.length; i++) {
        finalqty += parsed?.[i]?.quantity;
      }
      setQuantity(finalqty);
    }
  }, []);

  return (
    <>
      {isShop ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[200px] sm:max-w-[300px]"
          s
        >
          <div className="flex items-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <input
              type="search"
              className="w-full p-[10px] h-[40px]  py-[5px]  border-2 text-[18px] bg-transparent focus:ring-0 placeholder-gray-400"
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Search Here..."
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-[10px] h-[40px] py-[5px] text-[18px] border-2 border-blue-600 hover:border-blue-700 hover:bg-blue-700 transition-colors duration-300"
            >
              <FiSearch />
            </button>
          </div>
        </form>
      ) : null}
      {isShop && (
        <>
          <Link
            href={"/my-cart"}
            className="w-fit h-fit z-50 fixed top-[100px] right-[20px] bg-orange-500 transtion-all text-[25px] duration-300 hover:bg-orange-600 text-white p-[10px] rounded-full shadow-lg"
          >
            <FaShoppingCart />
            <button className="rounded-full absolute top-[30px] right-[20px] text-[14px] bg-red-600 text-white h-[30px] w-[30px]">
              {quantity}
            </button>
          </Link>
        </>
      )}
    </>
  );
};

export default ShopSearch;
