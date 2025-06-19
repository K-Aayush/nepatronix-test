"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { postData } from "@/ApiRequest/PostReqs";
import { FaCashRegister } from "react-icons/fa";

const makeInt = (str) => {
  if (typeof str === "number") {
    return str;
  }
  if (!str || typeof str !== "string") {
    return 0;
  }

  // Remove all non-numeric characters except '-'
  str = str.replace(/[^0-9-]/g, "");

  // Convert to integer
  return parseInt(str) || 0;
};


const MainCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userDetail, setUserDetail] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [submitAll, setSubmitAll] = useState(false);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const store = JSON.parse(storedCart || "[]");
        if (!Array.isArray(store)) {
          throw new Error("Invalid format");
        }
        setCartItems(store);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (cartItems && Array.isArray(cartItems)) {
      let price = 0;
      for (let i = 0; i < cartItems?.length; i++) {
        const item = cartItems?.[i];
        const onePrice = makeInt(item?.price) * item?.quantity;
        price += onePrice;
      }
      setTotal(price);
    }
  }, [cartItems]);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index, value) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = Math.max(1, value);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const openModal = (item = null, all = false) => {
    setSelectedItem(item);
    setSubmitAll(all);
    setShowModal(true);
  };

  const handleSubmitOrder = async () => {
    if (
      !userDetail.fullname ||
      !userDetail.email ||
      !userDetail.phone ||
      !userDetail.address
    ) {
      return alert("Please fill in all user details before submitting.");
    }

    if (submitAll) {
      await Promise.all(
        cartItems.map(async (item) => {
          const itemData = generateOrderData(item);
          return await postData(itemData, "orders");
        })
      );
      alert("Order placed successfully!");
    } else {
      const itemData = generateOrderData(selectedItem);
      await postData(itemData, "orders");
      alert("Order placed!");
    }

    setShowModal(false);
  };

  const generateOrderData = (item) => ({
    itemId: item?._id,
    itemName: item?.title,
    quantity: item?.quantity || 1,
    price: item?.price,
    total: parseFloat(item?.price) * (item?.quantity || 1),
    ...userDetail,
  });

  if (loading) {
    return (
      <main className="w-full min-h-[100vh] flex items-center justify-center bg-gray-100 text-[22px] font-semibold">
        Loading...
      </main>
    );
  }

  return (
    <main className="w-full p-[24px] min-h-[100vh] bg-gray-100 pt-[100px] flex flex-col items-center">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-[40px]">
          <p className="text-[24px] font-semibold text-gray-700">
            Your cart is empty
          </p>
          <button
            onClick={() => router.push("/shop")}
            className="mt-[16px] px-[24px] py-[12px] bg-blue-600 text-white rounded-[8px] text-[18px] hover:bg-blue-700 transition"
          >
            Add Items
          </button>
        </div>
      ) : (
        <div className="w-full max-w-[900px] bg-white p-[24px] rounded-[10px] shadow-lg">
          <div className="text-[28px] flex flex-wrap justify-between font-semibold text-gray-600 mb-[16px] border-b pb-[10px]">
            <h2>Shopping Cart</h2>
            <p><b>NPR </b>{total}</p>
          </div>
          <div className="mb-[20px] space-y-[14px]">
            {cartItems.map((item, index) => (
              <div
                key={item?._id}
                className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-[16px] p-[20px] border rounded-[12px] shadow-md bg-white w-full"
              >
                <div className="flex items-center gap-[20px] w-full sm:w-auto">
                  <Image
                    src={"/api/files" + item.cover}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] object-cover rounded-[8px] shadow-sm"
                    style={{ minWidth: "100px", minHeight: "100px" }}
                  />
                  <div>
                    <h3 className="text-[20px] font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-[18px] text-gray-700 font-medium">
                      {item.price} Rs
                    </p>
                    <p className="text-[16px] text-gray-600">
                      Total:{" "}
                      {parseFloat(item?.price) * (makeInt(item?.quantity) || 1)}{" "}
                      Rs
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-[12px]">
                  <button
                    onClick={() =>
                      handleQuantityChange(index, (item.quantity || 1) - 1)
                    }
                    className="w-[56px] h-[56px] bg-gray-300 text-gray-900 text-[24px] font-bold rounded-[8px] hover:bg-gray-400 transition-all"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={item.quantity || 1}
                    onChange={(e) =>
                      handleQuantityChange(index, Number(e.target.value))
                    }
                    className="w-[60px] h-[56px] text-center border border-gray-400 rounded-[8px] text-[20px] font-semibold"
                    min="1"
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(index, (item.quantity || 1) + 1)
                    }
                    className="w-[56px] h-[56px] bg-gray-300 text-gray-900 text-[24px] font-bold rounded-[8px] hover:bg-gray-400 transition-all"
                  >
                    +
                  </button>
                </div>

                <div className="flex gap-[12px]">
                  <button
                    onClick={() => openModal(item)}
                    className="px-[20px] py-[14px] bg-green-500 text-white text-[18px] font-semibold rounded-[8px] hover:bg-green-600 transition-all shadow-md"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="px-[20px] py-[14px] bg-red-500 text-white text-[18px] font-semibold rounded-[8px] hover:bg-red-600 transition-all shadow-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => openModal(null, true)}
            className="w-full px-[16px] py-[14px] bg-blue-600 text-white rounded-[8px] text-[18px] hover:bg-blue-700 transition"
          >
            Submit All
          </button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-[24px] rounded-[10px] shadow-lg w-[400px] relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-[10px] right-[10px] text-gray-600 hover:text-gray-900 text-[20px] font-bold"
            >
              ❌
            </button>

            {/* Title */}
            <h2 className="text-[22px] font-semibold mb-[16px] text-gray-800">
              Enter Your Details
            </h2>

            {/* Input Fields */}
            {["fullname", "email", "phone", "address"].map((field) => (
              <input
                key={field}
                name={field}
                value={userDetail[field]}
                onChange={handleInputChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full p-[10px] mb-[10px] border rounded text-[16px] text-gray-700"
              />
            ))}

            {/* Payment Options */}
            <div className="space-y-[12px]">
              <button
                onClick={handleSubmitOrder}
                className="w-full flex items-center justify-center bg-orange-500 text-white p-[14px] rounded-md text-[16px] font-semibold hover:bg-orange-600 transition transform hover:scale-105"
              >
                <FaCashRegister className="mr-[12px] text-xl" />
                Pay via Cash
              </button>
              <button
                onClick={handleSubmitOrder}
                className="w-full flex items-center justify-center bg-emerald-600 text-white p-[14px] rounded-md text-[16px] font-semibold hover:bg-emerald-700 transition transform hover:scale-105"
              >
                <span className="mr-[12px] text-xl border2 rounded-full text-white">
                  e
                </span>
                Pay via eSewa
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MainCart;
