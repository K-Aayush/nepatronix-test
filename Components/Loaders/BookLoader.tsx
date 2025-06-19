"use client";

import { getLists } from "@/ApiRequest/GetData";
import React, { useCallback, useEffect, useRef, useState } from "react";
import BookHolder from "../Holders/BookHolder";

const BookLoader = () => {
  const [data, setData] = useState<any[]>([]);
  const [index, setIndex] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const loadMoreData = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const fetched = await getLists("books", index, 12);

      if (!fetched || fetched?.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...fetched]);
        setIndex((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, [index, isLoading, hasMore]);

  useEffect(() => {
    // Initial load
    loadMoreData();
  }, [loadMoreData]);

   useEffect(() => {
      if (!loadMoreRef?.current || !hasMore) return;
  
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting && !isLoading) {
            loadMoreData();
          }
        },
        { threshold: 0.1 }
      );
  
      observerRef.current.observe(loadMoreRef?.current);
  
      return () => {
        if (observerRef?.current && loadMoreRef?.current) {
          observerRef.current.unobserve(loadMoreRef?.current);
        }
      };
    }, [loadMoreData, hasMore, isLoading]);
  return (
    <BookHolder isPage={true} isInfiniteScroll={true} data={data}>
      {null}
    </BookHolder>
  );
};

export default BookLoader;
