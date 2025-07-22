const HoverCard3 = ({ title, description, img }) => {
  return (
    <div className="flex items-center justify-center w-full h-[40dvh]">
      <article className="group relative aspect-video h-full w-full max-w-[32rem] cursor-pointer overflow-hidden rounded-lg ">
        {/* Background Image */}
        <img
          className="absolute inset-0 h-[40dvh] w-full object-cover opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          src={img}
          alt=""
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-500 ease-in-out group-hover:bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6  text-white">
          {/* Title */}
          <h2 className="translate-y-4 md:text-[1vw] lg:text-[1vw]  opacity-100 font-bold transition-all duration-500 ease-in-out group-hover:translate-y-8 group-hover:opacity-0">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <div className="opacity-0 md:text-[1vw] lg:text-[1vw]translate-y-8 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
              {description}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default HoverCard3;
