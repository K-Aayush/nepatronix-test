import React from "react";
import ThemeButton from "../Reusables/ThemeButton";
import GalleryCard from "../Reusables/GalleryCard";
import LinkMe from "../Reusables/LinkMe";

const GalleryHolder = ({
  data,
  isPage,
  isInfiniteScroll,
  children
}: {
  data: any;
  isPage: boolean;
  isInfiniteScroll: boolean;
  children:any
}) => {
  return (
    <section className="w-full py-4 text-xl">
      {!isInfiniteScroll && (
        <>
          <br />
          <br />
          {children}
          <br />
          <br />
        </>
      )}

      <div className="w-full px-10 flex justify-center flex-wrap" style={{gap:"4rem",width:"100%"}}>
        {data?.map((item: any, index: number) => (
          <LinkMe key={index} link={`/api/files${item?.image}`} >
            <GalleryCard
            key={index}
            data={item} // Inline CSS for custom margin
          />
          </LinkMe>      
        ))}
      </div>

      {!isPage && (
        <>
          <br />
          <br />
          <ThemeButton
            style={{ padding: "10px 20px", backgroundColor: "#1a202c", color: "#fff" }} // Inline CSS for button styling
            text="See All Books"
            link="/books"
          />
          <br />
          <br />
        </>
      )}

      {isInfiniteScroll && (
        <>
          <br />
          <br />
        </>
      )}
    </section>
  );
};

export default GalleryHolder;
