import Button from "app/components/Button";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";

const CalltoAction = ({ title, description, text, href }) => {
  return (
    <div className=" h-auto ">
      <section>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 mt-[7vh]">
          <div className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] rounded-3xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28">
            <div className=" mx-auto">
              <h2
                className={`${headingStyles.primaryCenter} ${headingStyles.white}`}
              >
                {title}{" "}
              </h2>
            </div>
            <DividerWhiteCenter />
            {description && (
              <p className="my-[2vh] mb-[5vh] font-arial text-white">
                {description}
              </p>
            )}

            <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:gap-5">
              <a
                className={`inline-flex items-center justify-center bg-white ${bodyTextStyles.cta} text-indigo-700 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                href={href}
              >
                {text}
              </a>
              <a
                className={`inline-flex items-center justify-center bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] ${bodyTextStyles.cta} text-white shadow-sm ring-1 ring-inset ring-white transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-800`}
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalltoAction;

// {title}
// {description}
// <Button text={text} href={href} />
