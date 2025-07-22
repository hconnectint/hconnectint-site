import React from "react";

const ImageGrid = () => {
  // Sample image data - you can replace these with your actual images
  const images = [
    {
      id: 1,
      src: "https://avatar.vercel.sh/jack",
      alt: "Image 1",
      title: "First Image",
    },
    {
      id: 2,
      src: "https://avatar.vercel.sh/jack",
      alt: "Image 2",
      title: "Second Image",
    },
    {
      id: 3,
      src: "https://avatar.vercel.sh/jack",
      alt: "Image 3",
      title: "Third Image",
    },
    {
      id: 4,
      src: "https://avatar.vercel.sh/jack",
      alt: "Image 4",
      title: "Fourth Image",
    },
  ];

  return (
    <div className="w-[50%] max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden group"
          >
            <div className="w-full h-full transition-transform duration-300 group-hover:scale-105">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Optional overlay with title */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
