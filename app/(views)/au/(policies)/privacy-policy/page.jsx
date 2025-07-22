import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-[20vh] bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl md:text-5xl pb-1 font-bold text-gray-900 mb-6 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-6 text-sm md:text-base font-arial">
              H Connect International (&quot;us&quot;, &quot;we&quot;, or
              &quot;our&quot;) operates the
              <a
                href="https://www.hconnectint.com"
                className="underline text-blue-600 hover:text-blue-800"
              >
                https://www.hconnectint.com
              </a>{" "}
              website (the &quot;Service&quot;). We value your privacy and
              strive to safeguard your data. By accessing our Service, you
              consent to the collection, use, and sharing of information as
              outlined in this policy.
            </p>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                Information We Collect and Its Use
              </h2>
              <p className="text-gray-600 mb-4 text-sm md:text-base font-arial">
                We gather diverse data types to enhance and provide our Service.
                Here&apos;s what we collect:
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                Personal Data
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base font-arial">
                Upon interacting with our Service, we might request identifiable
                details to get in touch or recognize you. This information
                includes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2 text-sm md:text-base font-arial">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                Usage Data
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base font-arial">
                Information about how our Service is accessed and used can also
                be gathered. This encompasses details like your IP address,
                browser type/version, the Service&apos;s pages you viewed, visit
                time and duration, device IDs, and other diagnostic information.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                Tracking and Cookie Data
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base font-arial">
                We use cookies, beacons, tags, and scripts to monitor and store
                information about Service interactions. You can set your browser
                to decline cookies, but this might restrict Service
                functionalities.
              </p>
              <div className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] p-4 rounded-lg mb-4 border-b-2">
                <h4 className="text-2xl font-semibold text-white font-GTAmerica mb-2">
                  Cookies We Utilize Include:
                </h4>
                <ul className="list-disc pl-6 text-white space-y-1 text-sm md:text-base font-arial">
                  <li>Session Cookies: For Service operations</li>
                  <li>Preference Cookies: To remember settings</li>
                  <li>Security Cookies: Enhancing security</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent mb-4 font-GTAmerica">
                Contact Us
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-arial">
                For queries on this policy, email us at:{" "}
                <a
                  href="mailto:info@hconnectint.com"
                  className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent hover:text-blue-800"
                >
                  info@hconnectint.com
                </a>
              </p>
            </section>

            <footer className="text-sm text-gray-500 mt-8 pt-4 border-t font-arial">
              <p>
                Last updated: December 2024. This privacy policy is subject to
                change. Please review periodically for updates.
              </p>
            </footer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
