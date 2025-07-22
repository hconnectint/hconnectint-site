import React from "react";

const NavigationComponent = () => {
  const navItems = [
    {
      title: "CSR",
      link: "/about/csr",
    },
    {
      title: "LEADERSHIP TEAM",
      link: "/about/leadership",
    },
    {
      title: "AWARDS & PARTNERSHIPS",
      link: "/about/awards-partnerships",
    },
  ];

  return (
    <div className="relative bg-white pb-16 pt-8 px-8">
      {/* Orange triangle decoration in top left */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group cursor-pointer text-center block no-underline"
            >
              {/* Title */}
              <h3 className="font-GTAmerica text-xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                {item.title}
              </h3>

              <div className="w-16 h-1 bg-gradient-to-bl from-[#27253c] to-[#0000ff] mb-6 group-hover:w-20 transition-all duration-300 mx-auto"></div>

              {/* Explore more link */}
              <div className="flex items-center justify-center text-gray-600 group-hover:text-blue-700 transition-colors duration-300">
                <span className="text-sm font-medium tracking-wide">
                  EXPLORE MORE
                </span>
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationComponent;
