"use client";
import { getLists } from "@/ApiRequest/GetData";
import React, { useCallback, useEffect, useRef, useState } from "react";
import GalleryHolder from "../Holders/GalleryHolder";

const GalleryLoader = () => {
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
      const fetched = await getLists("gallery", index, 12);

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

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !isLoading) {
          loadMoreData();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = loadMoreRef.current;
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
    <GalleryHolder isPage={true} isInfiniteScroll={true} data={data}>
      {null}
    </GalleryHolder>
  );
};

export default GalleryLoader;
