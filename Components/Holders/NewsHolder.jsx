import React from 'react';
import {getLists} from "@/ApiRequest/GetData";
import NewsCard from "@/Components/news/NewsCard"

const NewsHolder = async() => {
    const data = await getLists("news", 0, 1);
  return (
    <section className='w-full'>
        <NewsCard data={data?.[0]} isHome={true}/>
    </section>
  )
}

export default NewsHolder
