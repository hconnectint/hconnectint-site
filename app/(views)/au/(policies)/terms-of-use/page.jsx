import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen pt-[20vh] bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl md:text-5xl pb-1 font-bold mb-6 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
              Terms of Use
            </h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                1. Introduction
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base font-arial">
                Welcome to H Connect International. By using our website and
                services, you (the &quot;User&quot;) agree to comply with and be
                bound by the following terms and conditions (the
                &quot;Terms&quot;). Please review them thoroughly. If you do not
                agree with these Terms, please refrain from using our site.
              </p>

              <h2 className="text-2xl font-semibold mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                2. Acceptance of Agreement
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base font-arial">
                These Terms represent the entire and only agreement between H
                Connect International (&quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;) and the User, superseding all prior or
                contemporaneous agreements, representations, warranties, and
                understandings.
              </p>

              <h2 className="text-2xl font-semibold mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                3. Copyright
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base font-arial">
                The content, organization, graphics, design, and other matters
                related to our site are protected under applicable copyrights
                and other proprietary laws, including but not limited to
                intellectual property rights. Reproduction, modification, or
                distribution without our explicit consent is prohibited.
              </p>

              <h2 className="text-2xl font-semibold mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                4. Restrictions on Use
              </h2>
              <p className="text-gray-600 mb-4 text-sm md:text-base font-arial">
                You may not, without our written authorization:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2 text-sm md:text-base font-arial">
                <li>Modify, copy, reproduce, or exploit our content.</li>
                <li>
                  Use the website or its content for any commercial purpose.
                </li>
                <li>
                  Use our content on any other website or networked computer
                  environment.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                5. Deletion and Modification
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base font-arial">
                We reserve the right to edit or remove content, refuse access to
                the site, or discontinue the site (or any portion thereof) at
                any time without notice.
              </p>

              <h2 className="text-2xl font-semibold mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                6. Indemnification
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base font-arial">
                The User agrees to indemnify and hold us, our affiliates,
                officers, and employees harmless from any liability, loss,
                claim, and expense, including reasonable attorney&apos;s fees,
                related to a User&apos;s violation of these Terms or use of the
                website.
              </p>

              <h2 className="text-2xl font-semibold mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                7. Third-party Links
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base font-arial">
                Our site may contain links to external third-party websites. We
                are not responsible for the content, accuracy, or opinions
                expressed on such websites, and such websites are not
                necessarily investigated, monitored, or checked for accuracy by
                us.
              </p>

              <h2 className="text-2xl font-semibold mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                8. Changes to the Terms
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base font-arial">
                H Connect International reserves the right to modify these Terms
                at any time. Any modifications will be effective immediately
                upon posting. By continuing to use the site after any changes
                are made, the User agrees to those changes.
              </p>

              <h2 className="text-2xl font-semibold mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                9. Governing Law
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base font-arial">
                These Terms shall be governed by and construed in accordance
                with the laws of Sri Lanka. Any disputes arising under or in
                relation to these Terms shall be subject to the exclusive
                jurisdiction of the courts of Sri Lanka.
              </p>

              <h2 className="text-2xl font-semibold mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                10. Termination
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base font-arial">
                H Connect International may terminate a User&apos;s access to
                the website if they are found to be in violation of these Terms
                or for any reason H Connect International deems necessary,
                without prior notice.
              </p>

              <h2 className="text-2xl font-semibold mb-3 font-GTAmerica bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                11. Contact Information
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base font-arial">
                For any questions regarding these Terms, please contact us at:{" "}
                <a
                  href="mailto:info@hconnectint.com"
                  className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent hover:text-blue-800"
                >
                  info@hconnectint.com
                </a>
              </p>
            </section>

            <div className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] p-4 rounded-lg mb-4 border-b-2">
              <h4 className="text-2xl font-semibold text-white font-GTAmerica mb-2">
                Disclaimer
              </h4>
              <p className="text-white text-sm md:text-base font-arial">
                Please note that these are standard terms regarding use of our
                website and it&apos;s recommended to consult with a legal expert
                or attorney to ensure that the terms are comprehensive and
                compliant with any specific local law and regulation
                requirements that may be specifically applicable to you.
              </p>
            </div>

            <footer className="text-sm text-gray-500 mt-8 pt-4 border-t font-arial">
              <p>
                Last updated: December 2024. These terms are subject to change.
                Please review periodically for updates.
              </p>
            </footer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfUse;
