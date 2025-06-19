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
    const fetchAll = await fetchAllUri();
    const sitemap = generateSitemap(fetchAll);

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "stale-while-revalidate, s-maxage=3600",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: true }, { status: 500 });
  }
};

const fetchAllUri = async () => {
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
    "/tutorials"
  ];
  const serv = await service.find({}).select("_id link");
  const tuts = await youtube.find({}).select("_id link")
  const products = await product.find({}).select("_id link");
  const blogs = await blog.find({}).select("_id link");
  const books = await book.find({}).select("_id link");
  const shops = await shop.find({}).select("_id");
  const events = await event.find({}).select("_id");
  const achieves = await achievement.find({}).select("_id link");
  const courses = await course.find({}).select("_id link");
  const newsss = await news.find({}).select("_id link");

  const serviceUris = serv.map((item) => `/services/${item?.link || item._id}`);
  const productUris = products.map((item) => `/products/${item?.link || item._id}`);
  const blogUris = blogs.map((item) => `/blogs/${item?.link || item._id}`);
  const bookUris = books.map((item) => `/books/${item?.link || item._id}`);
  const shopUrl = shops.map((item) => `/shop/${item?.link || item._id}`);
  const eventUrl = events.map((item) => `/events/${item?.link || item._id}`);
  const achievementUrl = achieves.map((item) => `/achievements/${item?.link || item._id}`);
  const coursesUrl = courses.map((item) => `/courses/${item?.link || item._id}`);
  const newsUrl = newsss.map((item) => `/news/${item?.link || item._id}`);
  const tutinks = tuts.map((item)=>`/tutorials/${item?.link || item?._id}`)

  const allList = [
    ...uriList,
    ...serviceUris,
    ...productUris,
    ...blogUris,
    ...bookUris,
    ...shopUrl,
    ...eventUrl,
    ...achievementUrl,
    ...coursesUrl,
    ...tutinks,
    ...newsUrl,
  ];
  return allList;
};

const generateSitemap = (urls: any) => {
  const baseUrl = "https://nepatronix.org";
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  urls.forEach((url: any) => {
    sitemap += "<url>";
    sitemap += `<loc>${baseUrl}${url}</loc>`;
    sitemap += "<changefreq>weekly</changefreq>";
    sitemap += `<priority>${url === "/" ? 1 : 0.8}</priority>`;
    sitemap += "</url>";
  });

  sitemap += "</urlset>";
  return sitemap;
};
