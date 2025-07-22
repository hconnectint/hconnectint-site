"use client";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";

const PartnershipFeatures = () => {
  const features = [
    {
      icon: (
        <svg
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 32"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="_1" data-name="1">
              <path
                d="M22.196 22.02 18 21.18v-1.281A5.009 5.009 0 0 0 22 15V1a1 1 0 0 0-1-1h-7C6.091 0 6 4.796 6 5v10a5.01 5.01 0 0 0 4 4.899v1.281l-4.196.84C3.796 22.421 0 24.396 0 29v2a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-2c0-4.604-3.796-6.579-5.804-6.98zm-3.727 1.293L15.52 27H15v-1.586l2.329-2.329 1.14.228zM12 20h4v1.586l-2 2-2-2V20zM8 5.018C8.004 4.895 8.18 2 14 2h6v6.674l-5.725-1.636a1.001 1.001 0 0 0-.982.254C12.174 8.412 9.625 8.833 8 8.957V5.018zM8 15v-4.036c1.548-.1 4.453-.473 6.246-1.853L20 10.754V15c0 1.654-1.346 3-3 3h-6c-1.654 0-3-1.346-3-3zm2.671 8.085L13 25.414V27h-.52l-2.949-3.687 1.14-.228zM2 29c0-4.098 4.028-4.984 4.196-5.02l1.127-.225 3.896 4.87A1 1 0 0 0 12 29h1v1H2v-1zm24 1H15v-1h1a1 1 0 0 0 .781-.375l3.896-4.87 1.127.225c.171.035 4.196.887 4.196 5.02v1z"
                style={{ fill: "#ffedc57a" }}
              />
              <path d="M13 12h2v3h-2z" style={{ fill: "#ffedc57a" }} />
            </g>
          </g>
        </svg>
      ),
      title: "Dedicated Relationship Manager",
      description:
        "A dedicated partner for seamless collaboration, from day one",
    },
    {
      icon: (
        <svg
          className="group-hover:-translate-y-6 duration-700 text-[60px] text-[#ffedc57a]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path
            d="M28 21a5 5 0 0 0 0 10h3V21zM36 33h-3v10h3a5 5 0 0 0 0-10z"
            style={{ fill: "#ffedc57a" }}
          />
          <path
            d="M32 1a31 31 0 1 0 31 31A31.036 31.036 0 0 0 32 1zm0 58a27 27 0 1 1 27-27 27.03 27.03 0 0 1-27 27z"
            style={{ fill: "#ffedc57a" }}
          />
          <path
            d="M32 7a25 25 0 1 0 25 25A25.028 25.028 0 0 0 32 7zm4 38h-3v2a1 1 0 0 1-2 0v-2h-6a1 1 0 0 1 0-2h6V33h-3a7 7 0 0 1 0-14h3v-2a1 1 0 0 1 2 0v2h6a1 1 0 0 1 0 2h-6v10h3a7 7 0 0 1 0 14z"
            style={{ fill: "#ffedc57a" }}
          />
        </svg>
      ),
      title: "70% Cost Arbitrage",
      description:
        "A significant cost advantage to operations onshore, inclusive of initial setup, hiring, infrastructure, employee benefits and account management",
    },
    {
      icon: (
        <svg
          className="group-hover:-translate-y-6 duration-700 text-[60px] text-[#ffedc57a]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="_1" data-name="1">
              <path
                d="M24 48a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-46a22 22 0 1 0 22 22A22 22 0 0 0 24 2z"
                style={{ fill: "#ffedc57a" }}
              />
              <path
                d="M24 28a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM4 23h4v2H4zM40 23h4v2h-4zM23 4h2v4h-2zM23 40h2v4h-2z"
                style={{ fill: "#ffedc57a" }}
              />
              <path
                transform="rotate(-29.99 8.406 33)"
                d="M6.41 32h4v2h-4z"
                style={{ fill: "#ffedc57a" }}
              />
              <path
                transform="rotate(-29.99 39.594 15.007)"
                d="M37.59 14h4v2h-4z"
                style={{ fill: "#ffedc57a" }}
              />
              <path
                transform="rotate(-30 15.004 8.42)"
                d="M14 6.41h2v4h-2z"
                style={{ fill: "#ffedc57a" }}
              />
              <path
                transform="rotate(-30 33.013 39.586)"
                d="M32 37.59h2v4h-2z"
                style={{ fill: "#ffedc57a" }}
              />
              <path
                transform="rotate(-60.01 14.996 39.591)"
                d="M13 38.59h4v2h-4z"
                style={{ fill: "#ffedc57a" }}
              />
              <path
                transform="rotate(-60.01 29.366 14.707)"
                d="M21.62 13.7H37.1v2H21.62z"
                style={{ fill: "#ffedc57a" }}
              />
              <path
                transform="rotate(-60 8.41 14.994)"
                d="M7.41 13h2v4h-2z"
                style={{ fill: "#ffedc57a" }}
              />
              <path
                transform="rotate(-60 39.582 33.002)"
                d="M38.59 31h2v4h-2z"
                style={{ fill: "#ffedc57a" }}
              />
              <path
                transform="rotate(-60 30.086 27.509)"
                d="M29.08 23.49h2v8.05h-2z"
                style={{ fill: "#ffedc57a" }}
              />
            </g>
          </g>
        </svg>
      ),
      title: "Time Zone Collaboration",
      description: "24/7 uninterrupted support across all time zones",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto  px-4 lg:px-6">
      <div className="mx-auto-sm text-center mb-8">
        <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw] lg:text-[4.6vw] font-bold tracking-normal text-black">
          A{" "}
          <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
            RESULTS DRIVEN
          </span>{" "}
          PARTNERSHIP
        </div>
        <div className=" lg:mt-[-2.3vh]">
          {" "}
          <DividerBlueCenter />
        </div>
        <div className={bodyTextStyles.descriptionCenter}>
          Partnering with us delivers a distinct advantage, driving growth,
          reducing costs, and providing reliable support.
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={
                "group relative bg-no-repeat mx-auto p-10 px-6 rounded-lg transition-all duration-500 drop-shadow-lg hover:shadow-2xl"
              }
              style={{
                backgroundImage: "url('/site-wave.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex justify-end">
                <div className="group-hover:-translate-y-6 duration-700 text-[60px] text-[#ffedc57a]">
                  {feature.icon}
                </div>
              </div>
              <div className="h-full py-4">
                <h3 className="text-white font-GTAmerica font-bold text-2xl md:text-[1.8vw] pb-3">
                  {feature.title}
                </h3>

                <div className="text-md text-white">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipFeatures;
