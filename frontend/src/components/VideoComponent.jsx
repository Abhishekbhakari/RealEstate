import React from "react";

const VideoComponent = ({ title, description, videoUrl }) => {
  return (
    <div className="video-container p-4 max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 mb-4 text-sm md:text-base">{description}</p>

      {/* Video */}
      <div className="video-wrapper relative w-full pb-[56.25%] bg-black">
        <iframe
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;
