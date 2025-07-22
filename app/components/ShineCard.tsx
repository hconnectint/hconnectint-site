import { ShineBorder } from "./ShineBorder";

export default function ShineCard() {
  return (
    <div className="flex items-center justify-center  w-full h-[45dvh]">
      <article className="group relative aspect-video h-full w-full max-w-[36rem] cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl">
        {/* Background Image */}
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-500 ease-in-out group-hover:bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90% text-white transition-all duration-500 ease-in-out group-hover:from-black/60">
          <h2 className="absolute bottom-8 left-8 m-0 font-extrabold uppercase transition-all duration-300 ease-in-out group-hover:bottom-1/2">
            title
          </h2>
          <p className="absolute left-8 top-[60%] max-w-[80%] translate-y-8 opacity-0 transition-all duration-500 ease-in-out group-hover:top-1/2 group-hover:translate-y-0 group-hover:opacity-100">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            nostrum nesciunt reiciendis labore vel velit blanditiis vero, amet
            corporis porro saepe officiis officia sit sequi molestiae ab libero,
            quo tempora repellat? Facilis doloremque, eligendi neque sed fuga
            tempore hic magnam qui in sint maiores id, itaque totam, quis quasi!
          </p>
        </div>
      </article>
    </div>
  );
}
