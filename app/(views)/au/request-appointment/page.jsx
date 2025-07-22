"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "app/components/Button";
import Container from "app/sections/Container";
import GrowWithoutLimits from "app/components/GrowWithoutLimits";

const RequestAppointment = () => {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID"); // Replace with your actual Formspree form ID

  return (
    <div>
      <head>
        <title> Request an Appointment </title>
      </head>{" "}
      <div className="relative min-h-[135vh] md:min-h-[150vh] flex items-center pt-[10vh]">
        <img
          alt="background"
          src="/blue-waves-abstract.jpg"
          decoding="async"
          data-nimg="1"
          className="w-full h-full object-cover absolute inset-0 pointer-events-none"
          loading="lazy"
          style={{ color: "transparent" }}
        />
        <div className="relative max-w-7xl mx-auto p-6">
          <section
            className="rounded-xl"
            id="contact"
            style={{
              background: "rgba(255, 255, 255, 0)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(9px)",
              WebkitBackdropFilter: "blur(9px)",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 md:max-w-[80vw]">
              {/* Contact Heading */}
              <div className="mb-4 text-center">
                <h2 className="text-[13vw] leading-[13vw] md:text-[8vw] lg:text-[6vw] font-GTAmerica md:leading-[7.5vw] font-bold mt-[3vh] md:mt-0 text-white">
                  Request an <span className="text-white">Appointment</span>
                </h2>
                <div className="w-40 h-[2px] bg-white mt-8 mx-auto"></div>
              </div>

              {/* Contact Content */}
              <div className="flex items-stretch justify-center">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Details */}
                  <div className="h-full md:col-span-2">
                    <p className="mt-3 px-10 text-lg  text-white text-center md:text-left ">
                      Please fill out the form below to request an appointment.
                      We will get back to you as soon as possible.
                    </p>
                  </div>

                  {/* Contact Form */}
                  <div
                    className="card h-fit max-w-6xl p-5 md:p-12 md:col-span-2"
                    id="form"
                  >
                    {state.succeeded ? (
                      <div className="text-black text-2xl text-center font-arial bg-white rounded p-10">
                        Thanks for your message! We&apos;ll get back to you
                        soon.
                      </div>
                    ) : (
                      <>
                        <form onSubmit={handleSubmit} id="contactForm">
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                autoComplete="given-name"
                                placeholder="First Name *"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                required
                              />
                              <ValidationError
                                prefix="First Name"
                                field="firstName"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                autoComplete="family-name"
                                placeholder="Last Name *"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                required
                              />
                              <ValidationError
                                prefix="Last Name"
                                field="lastName"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="tel"
                                name="telephone"
                                id="telephone"
                                autoComplete="tel"
                                placeholder="Telephone"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                              />
                              <ValidationError
                                prefix="Telephone"
                                field="telephone"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                placeholder="Email *"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                required
                              />
                              <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                placeholder="Company Name"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                              />
                              <ValidationError
                                prefix="Company Name"
                                field="companyName"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="text"
                                name="jobTitle"
                                id="jobTitle"
                                placeholder="Job Title"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                              />
                              <ValidationError
                                prefix="Job Title"
                                field="jobTitle"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                              <input
                                type="url"
                                name="website"
                                id="website"
                                placeholder="Website"
                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                              />
                              <ValidationError
                                prefix="Website"
                                field="website"
                                errors={state.errors}
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                          <div className="flex justify-start pt-2">
                            <Button
                              text={"Request Appointment"}
                              type="submit"
                              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
                            >
                              {state.submitting
                                ? "Sending..."
                                : "Request Appointment"}
                            </Button>
                          </div>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="pb-16"></div>
      </div>
    </div>
  );
};

export default RequestAppointment;
