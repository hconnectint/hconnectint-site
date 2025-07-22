"use client";
import LandingPageInner from "app/sections/LandingPageInner";
import CTA from "app/sections/CTA";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import SectionTextLeftLongBlue from "app/sections/SectionTextLeftLongBlue";

import SectionTextRight from "app/sections/SectionTextRight";
import SectionTextLeft from "app/sections/SectionTextLeft";
import SectionTextRightLong from "app/sections/SectionTextRightLong";
import { cn } from "@/lib/utils";
const InvoiceToCash = () => {
  return (
    <div className="">
      <LandingPageInner
        subtitle="FINANCE AND ACCOUNTING CONSULTING"
        titleBeforeBlue=""
        blueTitle=" PROFIT MAXIMIZING"
        titleAfterBlue="SOLUTIONS"
        description=" We maximize the value of your finance function by driving sustainable growth, 
        optimizing cash flow, and enhancing governance.
        "
        ImgUrl="/f-a-main.jpg"
      />
      <SectionTextRightLong
        blueTitle="FUTURE-PROOFED "
        titleBeforeBlue={null}
        titleAfterBlue="FINANCE FUNCTIONS"
        description={
          <div className={`space-y-4  ${bodyTextStyles.descriptionLeft}`}>
            <div>
              Our in-house consultants and finance system architects with
              extensive experience in business process design, reengineering,
              and automation. We assist CFOs in managing their bottom line by
              developing robust control and governance frameworks, while
              providing actionable insights into financial data and management
              information.
            </div>
            <div>
              We leverage advanced analytics, cutting-edge digital technologies,
              and a deep understanding of financial processes to streamline
              operations and enhance decision-making capabilities. Whether
              it&apos;s optimizing transactional processes or aligning financial
              strategies with business objectives, our team ensures your finance
              function operates with greater agility and precision. Our tailored
              solutions empower CFOs to drive sustainable growth, improve
              financial resilience, and adapt to the evolving market landscape
              with confidence.
            </div>
            <div>
              This holistic approach to finance transformation helps build a
              forward-looking organization equipped for long-term success in the
              Australian market.
            </div>
          </div>
        }
        component={
          <div className="max-w-[60vw] w-[60vw] md:max-w-[40vw] md:w-[40vw] px-[2vw] ">
            <div
              className={cn(
                "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 mt-[7vh] ",
                "bg-[url('/f-a-2.jpg')] bg-cover bg-center h-[80vh]" // Changed aspect ratio
              )}
            />
          </div>
        }
      />
      <SectionTextLeftLongBlue
        text={"Get Started"}
        title={<>Access our framework immediately</>}
        description="Drive your finance function forward with data-driven insights, seamless automation, and strategic expertise. Achieve lasting growth, maximize profitability, and lead with confidence in a dynamic Australian business landscape. Empower your team to turn financial vision into measurable success."
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[40vw] md:w-[40vw] px-[2vw] ">
            <div
              className={cn(
                "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 mt-[7vh] ",
                "bg-[url('/f-a-3.jpg')] bg-cover bg-center h-[80vh]" // Changed aspect ratio
              )}
            />
          </div>
        }
      />
    </div>
  );
};

export default InvoiceToCash;
