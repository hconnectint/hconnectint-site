import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Add this import
import ButtonFoot from "app/components/ButtonFoot";

const Footer = () => {
  const pathname = usePathname(); // Use Next.js hook instead
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    // Check if current pathname contains /au
    setShowMap(pathname.includes("/au"));
  }, [pathname]); // Add pathname as dependency

  return (
    <footer className="bg-[#000000]">
      <div className="mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          {/* Conditionally render Google Map for Australian pages */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div>
                <a href="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium">
                    <span>
                      <img
                        src="/hci-white.png"
                        alt="AI Logo"
                        className="w-60 ml-[-1.5rem] mb-[-1.5rem]"
                      />
                    </span>
                  </div>
                </a>
              </div>

              <div className="max-w-md pr-16 text-md text-gray-400">
                Tailored solutions for a transforming world.{" "}
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/hconnect-int/posts/?feedView=all"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <span className="sr-only">Linkedin</span>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://www.instagram.com/hconnect_int/"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <span className="sr-only">Instagram</span>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.tiktok.com/@hconnect_int?lang=en"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <span className="sr-only">TikTok</span>
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a
                  href="https://www.facebook.com/p/H-Connect-International-100089982926738/"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <span className="sr-only">Facbook</span>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
              <div>
                <ButtonFoot text="Get Started" href="/request-appointment" />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 col-span-2 mt-0">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Our Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="/services/finance-and-accounting"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Finance and Accounting
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/technology"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Technology
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/consultancy-and-projects"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Consultancy and Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/australian-finance-and-accounting"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Australian Accounting and Financial Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/admin-support"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Admin Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/digital-marketing"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/human-resources"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Human Resources
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="/about"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/join-us"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="/terms-of-use"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Terms of use
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy-policy"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {showMap && (
            <div className="my-16">
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093384!2d144.9537353153167!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f34c89%3A0x506f0b535df4f2e7!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1640995200000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="H Connect International Australian Office Location"
                ></iframe>
              </div>
            </div>
          )}
          <div className="mt-16 border-t border-gray-100/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-white mx-auto">
              Copyright © 2025 HConnect International. All rights reserved.
              <br></br>
            </div>
            <div className="text-md text-center text-sm pt-2 text-gray-400 mx-auto">
              This website and its content are the property of H Connect
              International and are protected by applicable copyright laws.
              Unauthorized use, reproduction, or distribution is strictly
              prohibited. By accessing this site, you agree to our Terms of Use,
              Privacy Policy, and Data Protection Agreement (DPA). H Connect
              International is committed to safeguarding your personal data in
              compliance with applicable data protection regulations. For more
              information, please refer to our policy documents or contact us
              directly.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
