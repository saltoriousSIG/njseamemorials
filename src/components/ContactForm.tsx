"use client";
import type React from "react";
import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    isFuneralHome: false,
    deceasedName: "",
    deceasedLocation: "",
    deceasedDate: "",
    numberOfPeople: "1-5",
    hearAboutUs: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          isFuneralHome: false,
          deceasedName: "",
          deceasedLocation: "",
          deceasedDate: "",
          numberOfPeople: "1-5",
          hearAboutUs: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
      <div className="relative mb-12 md:mb-16">
        <div className="absolute inset-0 bg-[url('https://sjc.microlink.io/_wF23ColYQtvkgnRYNOXQgEPtQ0NlsywYa46lz_aixmesVlbrcgv4yGzCJiKZNGNZlyPy-XSKOg4SRgvtNaSrw.jpeg')] bg-cover bg-center opacity-20 rounded-xl"></div>
        <div className="relative bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-700 mb-4 text-center">
            We're Here to Help
          </h2>
          <p className="text-slate-600 text-lg mb-4 text-center max-w-3xl mx-auto">
            Whether you have questions about our sea memorial services, need
            assistance planning a ceremony, or would like more information about
            scattering ashes at sea, our team is here to provide guidance.
          </p>
          <p className="text-slate-600 text-lg text-center max-w-3xl mx-auto">
            Please fill out the form below, and we'll respond promptly. Your
            inquiry will be treated with the utmost care and confidentiality.
          </p>
          <p className="text-slate-600 text-lg text-center max-w-3xl mx-auto mt-5">
            If you do not hear from us within an hour via email, please call or
            text us at (732)-232-5620
          </p>
        </div>
      </div>

      {submitStatus === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-green-800 mb-2">Thank You</h3>
          <p className="text-green-700">
            Your message has been sent successfully. We'll get back to you
            shortly.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-medium text-slate-800">
              Contact Form
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 text-sky-600" />
                <span>(732)-232-5620</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4 text-sky-600" />
                <span>njseamemorials@gmail.com</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-slate-700"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-slate-700"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-slate-700"
                >
                  Home Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-slate-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-slate-700"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="zipcode"
                  className="block text-sm font-medium text-slate-700"
                >
                  Zipcode
                </label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                />
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-lg font-medium text-slate-800 mb-4">
                Service Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isFuneralHome"
                    name="isFuneralHome"
                    checked={formData.isFuneralHome}
                    onChange={handleChange}
                    className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300 rounded !bg-white text-black"
                  />
                  <label
                    htmlFor="isFuneralHome"
                    className="ml-2 block text-sm text-slate-700"
                  >
                    Are you a Funeral Home?
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="deceasedName"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Name of Deceased
                    </label>
                    <input
                      type="text"
                      id="deceasedName"
                      name="deceasedName"
                      value={formData.deceasedName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="deceasedLocation"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Desired Location
                    </label>
                    <input
                      type="text"
                      id="deceasedLocation"
                      name="deceasedLocation"
                      value={formData.deceasedLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="deceasedDate"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Desired Date
                    </label>
                    <input
                      type="date"
                      id="deceasedDate"
                      name="deceasedDate"
                      value={formData.deceasedDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="numberOfPeople"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Number of People
                    </label>
                    <select
                      id="numberOfPeople"
                      name="numberOfPeople"
                      value={formData.numberOfPeople}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                    >
                      <option selected className="text-black" value="1-6">
                        1-6
                      </option>
                      <option className="text-black" value="7-19">
                        7-19
                      </option>
                      <option className="text-black" value="20-49">
                        20-49
                      </option>
                      <option className="text-black" value="50+">
                        50+
                      </option>
                      <option className="text-black" value="col">
                        Celebration of Life Cruise
                      </option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="hearAboutUs"
                    className="block text-sm font-medium text-slate-700"
                  >
                    How did you hear about us?
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    id="hearAboutUs"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                  >
                    <option className="text-black" value="" disabled>
                      Please select an option
                    </option>
                    <option className="text-black" value="search">
                      Google Ads
                    </option>
                    <option className="text-black" value="instagram">
                      Instagram
                    </option>
                    <option className="text-black" value="facebook">
                      Facebook
                    </option>
                    <option className="text-black" value="referral">
                      Friend/Family Referral
                    </option>
                    <option className="text-black" value="funeral_home">
                      Funeral Home
                    </option>
                    <option className="text-black" value="advertisement">
                      Advertisement
                    </option>
                    <option className="text-black" value="other">
                      Other
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700"
              >
                Comments or Questions
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white text-black"
                placeholder="Please share any additional information or specific questions you may have..."
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit
                  </>
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
