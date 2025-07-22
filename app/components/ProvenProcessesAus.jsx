import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { DividerBlueCenter } from "app/components/Divider";

const ProvenProcessesAus = () => {
  return (
    <section>
      <div className=" max-w-screen-xl mx-auto px-4 pt-[5vh] ] pb-[5vh]  md:pb-[10vh]">
        <div className="mx-auto-sm text-center  ">
          <div className={headingStyles.primaryCenter}>
            THE POWER OF{" "}
            <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
              PROVEN PROCESSES
            </span>{" "}
          </div>
          <div className="  lg:mb-[-1vh]">
            {" "}
            <DividerBlueCenter />
          </div>
          <div className={bodyTextStyles.descriptionCenter}>
            We elevate business operations through best-in-class models and
            practices specifically designed to optimise workflows and drive
            results for Australian businesses.
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative">
          <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100"></div>
          <div className="grid divide-x divide-y divide-[0000ff] bg-transparent overflow-hidden rounded-xl border-[blue-500] text-blue-600 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            {[
              {
                title: "5-step Transition Plan",
                description:
                  "Our structured onboarding ensures a seamless integration, so you can hit the ground running",
              },
              {
                title: "Business Continuity Plan",
                description:
                  "Our BCP is designed to protect your business from disruptions and ensure continuity",
              },
              {
                title: "State-of-the-art office",
                description:
                  "Our office space offers the perfect blend of functionality and prestige",
              },
              {
                title: "In-house training and development",
                description:
                  "Our dedicated training teams ensure your team is equipped with the latest skills through ongoing development",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10   "
              >
                <div className="relative space-y-8 py-12 px-8">
                  <div className="space-y-2">
                    <h5 className="font-GTAmerica font-bold text-xl md:text-[2vw] md:leading-[2.3vw]  bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      {item.title}
                    </h5>
                    <div className="font-arial text-base text-black dark:text-neutral-300 max-w-[100%] relative z-10 ">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenProcessesAus;
