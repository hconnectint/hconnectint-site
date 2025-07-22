import { Card } from "app/components/Card";
import SectionTextRight from "app/sections/SectionTextRight";
import SectionTextLeft from "app/sections/SectionTextLeft";
import LandingPageInner from "app/sections/LandingPageInner";
import CTA from "app/sections/CTA";
import { cn } from "@/lib/utils";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { DividerBlueCenter } from "app/components/Divider";
import SectionTextRightLong from "app/sections/SectionTextRightLong";
import SectionTextLeftLongBlue from "app/sections/SectionTextLeftLongBlue";
import ButtonHead from "app/components/ButtonHead";
import SectionTextLeftBlue from "app/sections/SectionTextLeftBlue";

const AccountsPayable = () => {
  return (
    <div>
      <div className="">
        <LandingPageInner
          subtitle="ACCOUNTS PAYABLE"
          titleBeforeBlue="ADD"
          blueTitle=" STRATEGIC VALUE "
          titleAfterBlue="TO YOUR AP FUNCTION"
          description=" Accounts Payable (AP) solutions designed for improved cash
          flow, enhanced compliance, and a more streamlined workflow."
          ImgUrl="https://mrwallpaper.com/images/hd/colorful-finance-reports-and-charts-sjfl27ehdupf10xz.jpg"
        />
      </div>
      <SectionTextRightLong
        blueTitle={<> &nbsp;TRANSFORMED </>}
        titleBeforeBlue={<>AP </>}
        titleAfterBlue={null}
        description={
          <div className={`space-y-4  ${bodyTextStyles.descriptionLeft}`}>
            <div>
              As the role of the CFO evolves from a purely financial function to
              a strategic driver of innovation and growth, AP has emerged as a
              strategic lever driving profit and progress.
            </div>
            <div>
              In a time of volatile supply chains and fluctuating demand, a
              streamlined AP process enhances financial resilience and is
              essential to build strong supplier relationships within the
              Australian markets.
            </div>
            <div>
              AP teams serve a strategic purpose, supporting their businesses
              with efficient and effective supplier payments that safeguard
              operations and enhance corporate reputation. By adopting agility,
              automation, and data-driven insights through advanced
              technologies, AP will become a resilient, future-proof function
              for Australian businesses.
            </div>
          </div>
        }
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[40vw] md:w-[40vw] px-[2vw] ">
            <div
              className={cn(
                "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 mt-[7vh] ",
                "bg-[url('/ap-inner-services/AP-2.jpg')] bg-cover bg-center h-[80vh]" // Changed aspect ratio
              )}
            />
          </div>
        }
      />
      <div className="mb-[-5vh] md:mb-0"></div>

      <SectionTextLeftLongBlue
        text={"Get Started"}
        title={
          <>
            TAILORED <br />
            AP SOLUTIONS
          </>
        }
        titleBeforeBlue={null}
        titleAfterBlue={
          <>
            {" "}
            AP <br /> SOLUTIONS
          </>
        }
        description="Our AP solutions are crafted with a deep understanding of finance processes, leveraging cutting-edge automation technology to streamline operations. At H Connect International, our team works closely with you to eliminate silos between AP and procurement, enabling improved business results and enhancing the experience for both suppliers and employees"
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[40vw] md:w-[40vw] px-[2vw] ">
            <div
              className={cn(
                "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 mt-[7vh] ",
                "bg-[url('/ap-inner-services/AP-3.jpg')] bg-cover bg-center h-[80vh]" // Changed aspect ratio
              )}
            />
          </div>
        }
      />

      <div className="md:mb-[10vh]"></div>
    </div>
  );
};

export default AccountsPayable;
