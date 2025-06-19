import ConnectDB from "@/config/ConnectDB";
import achievement from "@/models/achievement";
import blog from "@/models/blog";
import book from "@/models/book";
import course from "@/models/course";
import event from "@/models/event";
import news from "@/models/news";
import product from "@/models/product";
import service from "@/models/service";
import shop from "@/models/shop";
import youtube from "@/models/youtube";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDB();
    const allowedPaths = await getDynamicAllowedPaths();
    const disallowedPaths = ["/dashboard/"];

    let responseText = `User-agent: *\n`;

    allowedPaths.forEach((path) => {
      responseText += `Allow: ${path}\n`;
    });

    disallowedPaths.forEach((path) => {
      responseText += `Disallow: ${path}\n`;
    });

    responseText += `Sitemap: https://nepatronix.org/sitemap.xml\n`;

    return new NextResponse(responseText, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error("Error generating robots.txt:", error);
    // Return a default response or handle the error as needed
    return new NextResponse(`User-agent: *\nDisallow: /`, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};

// Example function to get dynamic paths
const getDynamicAllowedPaths = async () => {
  const uriList = [
    "/",
    "/about",
    "/services",
    "/products",
    "/blogs",
    "/books",
    "/gallery",
    "/contact",
    "/team",
    "/shop",
    "/news",
    "/events",
    "/achievements",
    "/courses",
  ];

  // Fetching data from MongoDB models
  const serviceIds = await getServiceIds();
  const productIds = await getProductIds();
  const blogIds = await getBlogIds();
  const bookIds = await getBookIds();
  const shopIds = await getShopIds();
  const eventIds = await getEventIds();
  const achievementIds = await getAchievementIds();
  const courseIds = await getCourseIds();
  const newsIds = await getNewsIds();
  const tutIds = await getTutsIds();

  // Mapping IDs to URIs
  const serviceUris = serviceIds.map((id) => `/services/${id}`);
  const productUris = productIds.map((id) => `/products/${id}`);
  const blogUris = blogIds.map((id) => `/blogs/${id}`);
  const bookUris = bookIds.map((id) => `/books/${id}`);
  const shopUris = shopIds.map((id) => `/shop/${id}`);
  const eventUris = eventIds.map((id) => `/events/${id}`);
  const achievementUris = achievementIds.map((id) => `/achievements/${id}`);
  const courseUris = courseIds.map((id) => `/courses/${id}`);
  const newsUris = newsIds.map((id) => `/news/${id}`);
  const tuUris = tutIds.map((id) => `/tutorials/${id}`);

  // Combine static and dynamic URIs
  const allList = [
    ...uriList,
    ...serviceUris,
    ...productUris,
    ...blogUris,
    ...bookUris,
    ...shopUris,
    ...eventUris,
    ...achievementUris,
    ...tuUris,
    ...courseUris,
    ...newsUris,
  ];

  return allList;
};

// MongoDB querying functions (example placeholders)
const getServiceIds = async () => {
  const services = await service.find({}).select("_id link");
  return services.map((service) => service.link || service._id);
};

const getProductIds = async () => {
  const products = await product.find({}).select("_id link");
  return products.map((product) => product.link || product._id);
};

const getBlogIds = async () => {
  const blogs = await blog.find({}).select("_id link");
  return blogs.map((blog) => blog.link || blog._id);
};

const getBookIds = async () => {
  const books = await book.find({}).select("_id link");
  return books.map((book) => book.link || book?._id);
};

const getShopIds = async () => {
  const shops = await shop.find({}).select("_id link");
  return shops.map((shop) => shop.link || shop?._id);
};

const getEventIds = async () => {
  const events = await event.find({}).select("_id link");
  return events.map((event) => event.link || event?._id);
};

const getAchievementIds = async () => {
  const achievements = await achievement.find({}).select("_id link");
  return achievements.map(
    (achievement) => achievement.link || achievement?._id
  );
};

const getCourseIds = async () => {
  const courses = await course.find({}).select("_id link");
  return courses.map((course) => course.link || course?._id);
};

const getNewsIds = async () => {
  const newsList = await news.find({}).select("_id link");
  return newsList.map((news) => news.link || news?._id);
};

const getTutsIds = async () => {
  const newTuts = await youtube.find({}).select("_id link");
  return newTuts.map((tut) => tut.link || tut?._id);
};
