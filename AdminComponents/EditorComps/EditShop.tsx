"use client";

import { postAdminData, putAdmin } from "@/ApiRequest/PostAdmin";
import Image from "next/image";
import React, { Ref, useEffect, useRef, useState } from "react";

type dataType = any;

const defaultData: dataType = {
  _id: null,
  cover: "",
  title: "",
  description: "",
  price: "",
  productNo: "",
  images: [],
  category: "",
};

const EditShop = ({ data }: { data: dataType | null }) => {
  const [updates, setUpdates] = useState<any>(data || defaultData);
  const [load, setLoad] = useState(false);
  const [blobs, setBlobs] = useState<{ cover: string; images: string[] }>({
    cover: "",
    images: [],
  });

  useEffect(() => {
    if (data?.images) {
      setBlobs((prev) => ({
        ...prev,
        images: data.images.map((img: any) =>
          typeof img === "string"
            ? `/api/files${img}`
            : URL.createObjectURL(img)
        ),
      }));
    }
  }, [data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdates((prev: any) => ({ ...prev, [name]: value }));
  };

  const changeCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBlobs((prev: any) => ({ ...prev, cover: URL.createObjectURL(file) }));
    setUpdates((prev: any) => ({ ...prev, cover: file }));
  };

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const newImages = [...files, ...updates.images];
    const newBlobUrls = files.map((file) => URL.createObjectURL(file));

    setUpdates((prev: any) => ({ ...prev, images: newImages }));
    setBlobs((prev) => ({
      ...prev,
      images: [...newBlobUrls, ...prev.images],
    }));
  };

  const coverRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const removeImage = (index: number) => {
    const newImages = [...updates.images];
    newImages.splice(index, 1);
    setUpdates((prev: any) => ({ ...prev, images: newImages }));

    const newBlobs = [...blobs.images];
    const removedUrl = newBlobs.splice(index, 1)[0];
    URL.revokeObjectURL(removedUrl); // Clean up memory
    setBlobs((prev: any) => ({ ...prev, images: newBlobs }));
  };

  const handleSub = async (e: any) => {
    e?.preventDefault();

    setLoad(true);

    const newForm: FormData = new FormData();
    Object.entries(updates).forEach(([key, value]) => {
      if (key !== "images") {
        newForm.append(key, value as string | Blob);
      }
    });

    const newImgeStr: any = [];
    const imgNames: any = [];

    // Append each image individually
    updates.images.forEach((image: any, index: number) => {
      if (image instanceof File) {
        newForm.append(`image${index}`, image);
        imgNames.push(`image${index}`);
      } else {
        newImgeStr.push(image);
      }
    });
    newForm.append("names", JSON.stringify(imgNames));
    if (newImgeStr.length > 0) {
      newForm.append("images", JSON.stringify(newImgeStr));
    }

    let res: any;
    if (data?._id) {
      res = await putAdmin(newForm, "shop", data?._id);
    } else {
      res = await postAdminData(newForm, "shop");
    }
    setLoad(false);

    alert(res ? "Saved Successfully!" : "Failed to save!");
    if (res) {
      window.location.reload();
    }
  };

  return (
    <form
      onSubmit={handleSub}
      className="w-full p-[20px] flex flex-wrap max-w-[1200px] bg-white shadow-lg mx-auto rounded-2xl"
      style={{ maxWidth: "660px", gap: "20px" }}
    >
      <div
        className="w-full max-w-[300px] flex flex-col gap-[20px]"
        style={{ maxWidth: "300px" }}
      >
        <input
          type="file"
          className="hidden"
          onChange={changeCover}
          ref={coverRef}
          accept="image/*"
        />
        <Image
          src={
            blobs.cover ||
            (typeof updates.cover === "string"
              ? `/api/files${updates.cover}`
              : "/add.png")
          }
          width={300}
          height={300}
          onClick={() => coverRef.current?.click()}
          alt="Cover image"
          className="w-full h-[300px] cursor-pointer object-cover rounded-xl shadow-lg"
        />

        <div
          className="w-full overflow-x-scroll custom-scrollbar"
          style={{ width: "100%", overflowX: "scroll" }}
        >
          <div className="w-fit flex gap-[20px]">
            <input
              type="file"
              className="hidden"
              onChange={addImage}
              ref={imgRef}
              multiple
              accept="image/*"
            />
            <button
              type="button"
              onClick={() => imgRef.current?.click()}
              className="w-[75px] h-[75px] bg-slate-200 border-2 text-slate-700 text-[40px] rounded-xl hover:bg-slate-300 transition-all"
              style={{ width: "75px", height: "75px" }}
            >
              +
            </button>
            {blobs.images.map((url, index) => (
              <button
                type="button"
                onClick={() => removeImage(index)}
                key={url}
                className="w-[75px] h-[75px] bg-cover  border-2 bg-center rounded-xl"
                style={{
                  backgroundImage: `url(${url})`,
                  width: "75px",
                  height: "75px",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="w-full max-w-[300px] flex flex-col text-slate-600"
        style={{ maxWidth: "300px" }}
      >
        <label htmlFor="title" className="text-[18px] font-bold">
          Enter Title
        </label>
        <input
          type="text"
          required
          id="title"
          name="title"
          onChange={handleChange}
          value={updates?.title}
          className="w-full border-2 rounded-xl py-[5px] px-[10px] text-slate-700 border-slate-700 placeholder:text-slate-700 text-[18px]"
        />
        <br />
        <br />
        <label htmlFor="category" className="text-[18px] font-bold">
          Enter Category
        </label>
        <input
          type="text"
          required
          id="category"
          name="category"
          onChange={handleChange}
          value={updates?.category}
          className="w-full border-2 rounded-xl py-[5px] px-[10px] text-slate-700 border-slate-700 placeholder:text-slate-700 text-[18px]"
        />
        <br />
        <br />
        <label htmlFor="title" className="text-[18px] font-bold">
          Enter Prodict No.
        </label>
        <input
          type="text"
          id="productNo"
          required
          name="productNo"
          onChange={handleChange}
          value={updates?.productNo}
          className="w-full border-2 rounded-xl py-[5px] px-[10px] text-slate-700 border-slate-700 placeholder:text-slate-700 text-[18px]"
        />
        <br />
        <br />
        <label htmlFor="title" className="text-[18px] font-bold">
          Enter Price {"(NPR)"}
        </label>
        <input
          type="text"
          id="price"
          required
          name="price"
          onChange={handleChange}
          value={updates?.price}
          className="w-full border-2 rounded-xl py-[5px] px-[10px] text-slate-700 border-slate-700 placeholder:text-slate-700 text-[18px]"
        />
        <br />
        <br />
        <label htmlFor="title" className="text-[18px] font-bold">
          Enter Product Details
        </label>
        <textarea
          id="description"
          required
          name="description"
          onChange={handleChange}
          value={updates?.description}
          className="w-full border-2 h-[200px] rounded-xl py-[5px] px-[10px] text-slate-700 border-slate-700 placeholder:text-slate-700 text-[18px]"
        />
        <br />
        <br />
        <button
          type="submit"
          disabled={load}
          className="w-full p-[5px] bg-blue-600 rounded-xl text-white text-[16px] transition-all duration-300 hover:bg-blue-700 "
        >
          {load ? "Saving" : "Save"}
        </button>
        <br />
        <br />
        <button
          disabled={load}
          type="button"
          className="w-full p-[5px] bg-red-500 rounded-xl text-white text-[16px] transition-all duration-300 hover:bg-red-700 "
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default EditShop;
