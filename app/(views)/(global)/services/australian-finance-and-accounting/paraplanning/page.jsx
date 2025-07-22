import ServiceBeyond from "app/components/ServiceBeyond";
import CTA from "app/sections/CTA";
import PartnershipFeatures from "app/components/PartnershipFeatures";

const logos = [
  {
    name: "myob",
    url: "/suite-logo/adviser.png",
  },
  {
    name: "myob",
    url: "/suite-logo/midwinter.png",
  },
  {
    name: "myob",
    url: "/suite-logo/xplan.png",
  },
];

const suite = [
  { img: "/suite-logo/myob.png" },
  { img: "/suite-logo/qb.png" },
  { img: "/suite-logo/accurri.png" },
  { img: "/suite-logo/xero.png" },
  { img: "/suite-logo/reckon.png" },
  { img: "/suite-logo/power-bi.png" },
  { img: "/suite-logo/xero.png" },
  { img: "/suite-logo/ACL.png" },
];

const serviceBorders = [
  {
    title: "Admin Tasks",
    description:
      "From routine tasks to more complex procedures like review preparation, our streamlined admin procedures with seamless communication and accurate documentation take care of it all",
  },
  {
    title: "SOA and ROA preparation",
    description:
      "Our paraplanners are dedicated to crafting clear, compliant, and client-centric SOAs and ROAs",
  },
];

const serviceBorders2 = [
  {
    title: "Strategy Execution",
    description:
      "We ensure the seamless implementation of your recommended solutions within the expected timeframe to achieve the desired results",
  },
  {
    title: "Compliance Support",
    description:
      "We stay ahead of regulatory changes and maintain industry standards rigorously and proactively",
  },
];

const Paraplanning = () => {
  return (
    <div className="">
      <section className="">
        <div className="max-w-screen-xl mx-auto pt-[15vh] md:pt-[15vh]   lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw] font-bold tracking-normal text-black  ">
              {" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                PARAPLANNING
              </span>
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black px-4 md:px-0">
              We handle the time-consuming back-end tasks, from preparation up
              to the sign-off stage, so you can focus on growing your business
              and delivering exceptional client service. Our experienced team
              supports you throughout the paraplanning process.
            </div>
          </div>
          <div className="mx-auto ">
            <div className="flex mx-auto justify-center ">
              <ServiceBeyond features={serviceBorders} />
            </div>
            <div className="flex justify-center ">
              <ServiceBeyond features={serviceBorders2} />
            </div>

            <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5"></div>
          </div>
        </div>
        <div className="pt-[5vh] md:pt-[10vh] ">
          <PartnershipFeatures />
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[5vh]  lg:px-6 ">
        <div className="mx-auto ">
          <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <section>
              <div className="max-w-screen-xl mx-auto  px-4  lg:px-6 mt-[4vh]  mb-[-5vh]">
                <div className="mx-auto-sm text-center mb-8 lg:mb-16">
                  <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black ">
                    OUR{" "}
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      COMPREHENSIVE
                    </span>{" "}
                    SUITE
                  </div>
                  <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black px-4 md:px-0 ">
                    We are equipped with the right tools for the right job
                  </div>
                </div>
                <div className="flex justify-center ">
                  <div className=" justify-center"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex w-full flex-col items-center justify-center px-4 md:px-20">
                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-x-6 ">
                    {logos.map((logo, key) => (
                      <img
                        key={key}
                        src={logo.url}
                        className="h-[15vh] md:h-[30vh]  w-full object-contain"
                        alt={`${logo.name}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className=" pt-[5vh] md:pt-[10vh]">
        <CTA
          title="READY TO DELIVER FROM DAY ONE"
          href={"/contact"}
          text={"Start Now"}
        ></CTA>
      </div>
    </div>
  );
};

export default Paraplanning;
