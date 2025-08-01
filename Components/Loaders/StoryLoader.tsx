"use client";

import { getLists } from "@/ApiRequest/GetData";
import React, { useCallback, useEffect, useRef, useState } from "react";
import StoryHolder from "../Holders/StoryHolder";

const BlogLoader = () => {
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
      const fetched = await getLists("stories", index, 12);

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
    if (!loadMoreRef.current || !hasMore) return;

    const currentRef = loadMoreRef.current;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !isLoading) {
          loadMoreData();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current && currentRef) {
      observerRef.current.observe(currentRef);
    }

    return () => {
      if (observerRef.current && currentRef) {
        observerRef.current.unobserve(currentRef);
      }
    };
  }, [loadMoreData, hasMore, isLoading]);

  return (
    <StoryHolder isPage={true} isInfiniteScroll={true} data={data}>
      {null}
    </StoryHolder>
  );
};

export default BlogLoader;
