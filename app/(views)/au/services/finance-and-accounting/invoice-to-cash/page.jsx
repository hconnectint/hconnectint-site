"use client";
import LandingPageInner from "app/sections/LandingPageInner";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { cn } from "@/lib/utils";

import SectionTextRightLong from "app/sections/SectionTextRightLong";
import SectionTextLeftLongBlue from "app/sections/SectionTextLeftLongBlue";

const InvoiceToCash = () => {
  return (
    <div className="">
      <LandingPageInner
        subtitle="INVOICE-TO-CASH"
        titleBeforeBlue=""
        blueTitle=" ACCELERATE  "
        titleAfterBlue="INVOICE-TO-CASH"
        description=" We optimize the accounts receivable process by creating in-depth visibility, enabling better decisions, improving user experiences, and boosting cash flow for Australian businesses."
        ImgUrl="/F&A-services/invoCash.jpg"
      />
      <div className="pt-[5vh] md:pt-[10vh]"></div>
      <SectionTextRightLong
        blueTitle={<> PROACTIVE </>}
        titleBeforeBlue={<>FROM REACTIVE TO </>}
        titleAfterBlue={null}
        description={
          <div className={`space-y-4  ${bodyTextStyles.descriptionLeft}`}>
            <div>
              Today&apos;s demanding economic environment is leading to
              increased days sales outstanding (DSO) and a growing pile of
              past-due invoices for companies across Australia. It is essential
              that CFOs visibility on real-time cash flow forecasts, revised
              credit limit strategies, and their overall cash position withing
              the Australian economy.
            </div>
            <div>
              However, many companies find their Accounts Receivable functions
              to be labor-intensive and overly complex, limiting agility. To
              optimize value, Accounts Receivable teams must prioritize
              functional expertise and analytics automation to streamline
              processes, optimize transactions, and unlock predictive insights
              faster.
            </div>
            <div className="">
              We specialize in transforming AR functions into agile,
              future-ready operations. Our teams will enable you to navigate the
              complexities of the Australian business landscape and ehance your
              invoice-to-cash process for maximum efficiency and profitability.
            </div>
          </div>
        }
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[40vw] md:w-[40vw] px-[2vw] ">
            <div
              className={cn(
                "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 mt-[7vh] ",
                "bg-[url('/ic2.jpg')] bg-cover bg-center h-[80vh]" // Changed aspect ratio
              )}
            />
          </div>
        }
      />

      <SectionTextLeftLongBlue
        text={"Get Started"}
        title={
          <>
            Take your first step towards an agile and future-ready business{" "}
            <br />
          </>
        }
        titleBeforeBlue={null}
        titleAfterBlue={
          <>
            {" "}
            AP <br /> SOLUTIONS
          </>
        }
        description="Accelerate your cash flow, reduce payment cycles, and optimize working capital with our streamlined Invoice-to-Cash solutions. Enhance visibility, minimize risks, and empower your finance team to drive efficient collections for sustained business growth."
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[40vw] md:w-[40vw] px-[2vw] ">
            <div
              className={cn(
                "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 mt-[7vh] ",
                "bg-[url('/ic3.jpg')] bg-cover bg-center h-[80vh]" // Changed aspect ratio
              )}
            />
          </div>
        }
      />
    </div>
  );
};

export default InvoiceToCash;
