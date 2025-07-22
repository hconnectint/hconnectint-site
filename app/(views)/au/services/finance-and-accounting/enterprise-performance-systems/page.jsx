"use client";
import LandingPageInner from "app/sections/LandingPageInner";
import SectionTextLeftLongBlue from "app/sections/SectionTextLeftLongBlue";
import { bodyTextStyles } from "app/constants/FontStyles";
import { cn } from "@/lib/utils";
import SectionTextRightLong from "app/sections/SectionTextRightLong";

const EPM = () => {
  return (
    <div className="">
      <LandingPageInner
        subtitle="EPM"
        titleBeforeBlue=""
        blueTitle=" ENTERPRISE 
           "
        titleAfterBlue="PERFORMANCE 
        MANAGEMENT (EPM)"
        description=" Improve your reporting, planning, and forecasting capabilities to become a
        strategic business partner. "
        ImgUrl="/service-images/epm-main.jpg"
      />
      <SectionTextRightLong
        blueTitle={<> NEURAL NETWORK </>}
        titleBeforeBlue={<>THE </>}
        titleAfterBlue={<>OF BUSINESS </>}
        description={
          <div className={`space-y-4  ${bodyTextStyles.descriptionLeft}`}>
            <div>
              The economic landscape is rapidly evolving, with inflation, supply
              chain disruptions, and other factors demanding greater agility and
              predictive capabilities from FP&A leaders. There is an urgent need
              for firms to shift their planning, forecasting, and performance
              management processes to from reactive to proactive.
            </div>
            <div>
              We transform EPM into a neural business unit, providing the
              precise predictive insights from static MIS to help you make
              decisions. Our approach begins with establishing a robust EPM
              Center of Excellence (CoE), followed by the integration of
              predictive intelligence into your reporting, financial planning
              and analysis, and enterprise performance management.
            </div>
            <div>
              Our deep-rooted EPM expertise, combined with cutting-edge digital
              and analytics capabilities, enables us to uncover actionable
              insights. Our consultancy approach leverages proven transformation
              frameworks to deliver world-class EPM solutions, tailor made for
              Australian Companies.
            </div>
          </div>
        }
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[40vw] md:w-[40vw] px-[2vw] ">
            <div
              className={cn(
                "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 mt-[7vh] ",
                "bg-[url('/service-images/epm-2.jpg')] bg-cover bg-center h-[80vh]" // Changed aspect ratio
              )}
            />
          </div>
        }
      />

      <SectionTextLeftLongBlue
        text={"Get Started"}
        title={
          <>
            Boost your data to decision cycle with our EPM and FP&A capabilities
          </>
        }
        description="Unlock the full potential of your financial data with our advanced EPM and FP&A solutions. Streamline your processes, enhance forecasting accuracy, and make informed decisions faster than ever before. Empower your finance teams to act with agility and precision in an ever-changing market."
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[40vw] md:w-[40vw] px-[2vw] ">
            <div
              className={cn(
                "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 mt-[7vh] ",
                "bg-[url('/service-images/epm-3.jpg')] bg-cover bg-center h-[80vh]" // Changed aspect ratio
              )}
            />
          </div>
        }
      />
    </div>
  );
};

export default EPM;
