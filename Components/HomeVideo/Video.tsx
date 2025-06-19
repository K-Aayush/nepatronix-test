"use client"
import React from "react";

const Video = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 8rem)",
      }}
    >
      <video
        autoPlay
        loop
        muted={true}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/api/files/variable/video.mp4" type="video/mp4" />
      </video>
      {/* Your content goes here */}
    </div>
  );
};

export default Video;
