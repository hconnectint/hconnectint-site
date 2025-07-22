const HoverCard = ({ title, description, img }) => {
  return (
    <div className="flex items-center justify-center w-full h-[55dvh]">
      <article className="group relative aspect-video h-full w-full max-w-[32rem] cursor-pointer overflow-hidden rounded-lg ">
        {/* Background Image */}
        <img
          className="absolute inset-0 h-[55dvh] w-full object-cover opacity-90 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          src={img}
          alt=""
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-500 ease-in-out group-hover:bg-opacity-70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8  text-white">
          {/* Title */}
          <h2 className="opacity-0 md:text-[1vw] lg:text-[1vw]   translate-y-8 font-bold transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <div className="opacity-0  md:text-[1vw] lg:text-[1vw] translate-y-8 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
              {description}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default HoverCard;
