import Container from "app/sections/Container";
import Meta from "app/components/Meta";

import HoverCard3 from "app/components/HoverCard3";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { DividerBlueCenter } from "app/components/Divider";

const metadata = {
  title: "Top Outsourcing Services | H Connect International",
  description:
    "Discover how our secure outsourcing services can drive tangible results for your business by combining people, processes, and technical expertise.",
};

const Services = () => {
  return (
    <div>
      <div className="pt-[10vh] md:pt-[5vh]">
        <section className="flex flex-wrap flex-col-reverse sm:flex-row pt-[14vh] md:pt-[5vh]">
          {/* Text Content */}
          <div className="w-full md:w-8/12  ">
            <div className="container mx-auto lg:px-20 h-[30vh] md:h-dvh ">
              <div className="container px-4 flex flex-col justify-center items-center h-full lg:mt-0 ">
                <div className="w-full text-center md:text-left ">
                  <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold">
                    SERVICES
                    <span className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                      .
                    </span>
                    <div className="flex justify-center md:justify-start w-full">
                      <div className="w-40 h-[2px] bg-gradient-to-bl from-[#27253c] to-[#0000ff] my-4"></div>
                    </div>
                  </div>
                  <h1 className={headingStyles.LargeHeading}>
                    BETTER. <br />
                    FASTER.
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      {" "}
                      <br />
                      SMARTER.
                    </span>
                    <br />
                  </h1>
                  <div className={bodyTextStyles.descriptionLeft}>
                    We deliver exceptional value through tailored services for
                    better outcomes, faster results, and smarter decisions.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <img
            src={"/serv/main.jpg"}
            alt="Finance Reports"
            className="w-full sm:h-screen sm:w-4/12 object-cover hidden md:block"
          />
        </section>

        <section className="bg-white dark:bg-gray-900 pt-[5vh] md:pt-[5vh]">
          <div className="py-8 px-4 mx-auto  lg:py-16 lg:px-6">
            <div className="mx-auto-sm text-center mb-8 ">
              <div className={headingStyles.primaryCenter}>
                OUR
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                  {" "}
                  VALUE-ADDED
                </span>{" "}
                SERVICES
              </div>
              <DividerBlueCenter />
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  px-[5vw]">
              <HoverCard3
                title={"Finance & Accounting"}
                description={
                  <div>
                    <a href="/services/finance-and-accounting">
                      <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                        Learn More
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        className="w-5 h-5 fill-current "
                      >
                        <path
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </a>
                  </div>
                }
                img={"/serv/financeAcc.jpg"}
              />
              <HoverCard3
                title={"Technology"}
                description={
                  <div>
                    <a href="/services/technology">
                      <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                        Learn More
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        className="w-5 h-5 fill-current "
                      >
                        <path
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </a>
                  </div>
                }
                img={"/serv/tech.jpg"}
              />
              <HoverCard3
                title={"Consultancy & Projects"}
                description={
                  <div>
                    <a href="/services/consultancy-and-projects">
                      <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                        Learn More
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        className="w-5 h-5 fill-current "
                      >
                        <path
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </a>
                  </div>
                }
                img={"/serv/projects.jpg"}
              />
              <HoverCard3
                title={"Australian Accounting & Financial Services"}
                description={
                  <div>
                    <a href="/services/australian-finance-and-accounting">
                      <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                        Learn More
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        className="w-5 h-5 fill-current "
                      >
                        <path
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </a>
                  </div>
                }
                img={"/serv/aus.jpg"}
              />
              <HoverCard3
                title={"Admin Support"}
                description={
                  <div>
                    <a href="/services/admin-support">
                      <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                        Learn More
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        className="w-5 h-5 fill-current "
                      >
                        <path
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </a>
                  </div>
                }
                img={"/serv/admin.jpg"}
              />
              <HoverCard3
                title={"Digital Marketing"}
                description={
                  <div>
                    <a href="/services/digital-marketing">
                      <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                        Learn More
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        className="w-5 h-5 fill-current "
                      >
                        <path
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </a>
                  </div>
                }
                img={"/serv/DigitalMarketing.jpg"}
              />
              <HoverCard3
                title={"Human Resources"}
                description={
                  <div>
                    <a href="/services/human-resources">
                      <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                        Learn More
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        className="w-5 h-5 fill-current "
                      >
                        <path
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </a>
                  </div>
                }
                img={"/serv/HumanResources.jpg"}
              />
              <HoverCard3
                title={"Remote Teams"}
                description={
                  <div>
                    <a href="/services/remote-teams">
                      <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                        Learn More
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        className="w-5 h-5 fill-current "
                      >
                        <path
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </a>
                  </div>
                }
                img={"/serv/remote.jpg"}
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]"></div>
        </section>

        <Container className="w-full mt-[-2vh]">
          <section className="text-black min-h-[60vh] rounded-md">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
              <div className="flex justify-center pb-10">
                <div className={headingStyles.primaryCenter}>
                  FREQUENTLY ASKED
                  <span className="bg-gradient-to-bl from-[#17197a] to-[#0000ff] bg-clip-text text-transparent">
                    {"  "} QUESTIONS {"  "}
                  </span>
                  <DividerBlueCenter />
                </div>
              </div>

              <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 text-black">
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    What roles can be outsourced?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We partner with firms looking to outsource any back-office
                      function, including Finance & Accounting, Human Resources,
                      Technology, and Marketing as a service. We provide
                      dedicated resources for specialised, high-demand niches or
                      entire teams to handle entire business functions.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    What are the benefits of outsourcing?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      <strong>Reduce overhead costs:</strong> Outsourcing
                      non-core functions can significantly reduce expenses
                      related to hiring, training, and managing in-house staff.
                      This can be as much as 60-70%. <br />
                      <strong>Access to specialised expertise:</strong> We have
                      deep-domain expertise in specific business processes,
                      allowing the delivery of high-quality services
                      efficiently. <br />
                      <strong>Improve scalability:</strong> We help scale
                      operations quickly and flexibly to meet changing demands.{" "}
                      <br />
                      <strong>Focus on growth:</strong> Together, we can focus
                      on growing and expanding efficiently.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Are there measures to ensure the security of financial data?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We adhere to all global security standards, including
                      GDPR, DPA, and the Australian Privacy Act 1988, and we are
                      an ISO 27001-certified organisation.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    How can the time zone differences be managed?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We have teams working across different time zones, and our
                      infrastructure is designed for 24/7 operations. Our teams
                      work seamlessly with Greenwich Mean Time (GMT) and British
                      Summer Time (BST) and can tailor our schedules to align
                      with your specific needs.
                      <br />
                      <br />
                      Additionally, our Labour laws are flexible and
                      industry-adapted, allowing us to accommodate any specific
                      scheduling requirements without disruption.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Are there any Guarantees or Service Level Agreements (SLAs)
                    in Place?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We have general Service Level Agreements in place that
                      specify Key Performance Indicators (KPIs) to ensure
                      complete accountability of deliverables.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Are the services offered customisable?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We create customised solutions tailored to specific
                      business goals. With experience across various industries,
                      we collaborate closely to understand any unique
                      requirements and deliver personalised solutions.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Where are the H Connect International offices located?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We are equipped with two cutting-edge facilities—one
                      situated at the World Trade Centre in Colombo&apos;s
                      financial hub and the other conveniently located just 5
                      kilometres away from it in the heart of Colombo.
                      <br />
                      <br />
                      While our operational hubs are in Colombo, our processes
                      and technology are designed to provide seamless support
                      and communication for our UK partners.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    How does H Connect International&apos;s pricing structure
                    compare to other outsourcing companies?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We adopt a transparent pricing structure that considers
                      the complexity of each job. For further details, feel free
                      to reach out, and we will provide a breakdown of our
                      pricing information.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Why does outsourcing & offshoring to Sri Lanka provide such
                    substantial cost savings?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      Sri Lanka offers a highly skilled talent pool, a 91%
                      literacy rate, and a flexible education system. Combined
                      with lower living costs and a favourable exchange rate,
                      businesses can achieve significant cost reductions while
                      maintaining high quality and productivity.
                      <br />
                      <br />
                      This allows businesses in the UK to achieve significant
                      cost reductions while accessing highly skilled
                      professionals who understand global best practices.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    How to get started with BPO?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We recommend a free consultation to assess your
                      requirements. Together, we will decide on the best
                      possible approach that fits your needs.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    How will BPO impact my existing team?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      BPO is designed to augment existing teams. Our team will
                      take over all back-end tasks and free up the existing
                      onshore teams to focus on higher-value processes.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Is BPO complex to implement?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We have a 5-staged BPO transition process in place to
                      ensure smooth implementation. We offer change management
                      services to make the transition as smooth as possible.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    How is the success of BPO measured?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We believe in transparency. We have data and analytics in
                      place to track improvements in efficiency, cost savings,
                      time savings, and other key metrics.
                      <br />
                      <br />
                      Additionally, we have quarterly service reviews with our
                      clients. These sessions allow us to fine-tune our
                      strategies, address any concerns, and reaffirm our
                      commitment to exceeding expectations.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    How long does it take to set up an offshore team?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      Our sourcing and onboarding process typically takes 6-8
                      weeks. This is complete with induction and relevant
                      training.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Do you have experience working with UK businesses or within
                    the UK regulatory environment?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      Yes, we have experience partnering with UK businesses
                      across various sectors, including social care, strata
                      management, mortgage broking, and apparel. Our teams are
                      trained in relevant UK business practices and can adapt to
                      specific industry regulations where required. Please
                      contact us to discuss your specific industry.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    Can you provide UK-based references or case studies?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We have built a portfolio of successful partnerships with
                      businesses in the UK. We would be happy to share case
                      studies and references upon request. Meanwhile, you can
                      access client testimonials on the home page.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    How do you ensure cultural alignment when working with teams
                    in the UK?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We understand the importance of cultural alignment. Our
                      training programs include awareness of UK business culture
                      and communication styles. We strive to build strong,
                      collaborative relationships with our UK partners through
                      clear and respectful communication.
                    </div>
                  </div>
                </details>

                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    What communication methods do you use to stay connected with
                    clients in the UK?
                  </summary>
                  <div className="px-4 pb-4">
                    <div>
                      We utilise a range of communication tools, including email
                      and video conferencing (Microsoft Teams), to ensure
                      seamless and convenient communication across different
                      time zones. Most of our teams have daily catchups, weekly
                      meetings or equivalent depending on unique client
                      preferences. We are flexible and can adapt to your
                      preferred communication methods.
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
};
export default Services;
