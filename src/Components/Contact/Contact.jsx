import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800">Contact Us</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <h3 className="text-lg font-medium text-gray-700">
              Send us a message
            </h3>
            <form className="mt-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium text-gray-900">
                Contact Information
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 flex items-center justify-between text-sm font-medium">
                  <dt className="text-gray-500">Email</dt>
                  <dd className="text-gray-900">lelynguyen2907@gmail.com</dd>
                </div>
                <div className="py-3 flex items-center justify-between text-sm font-medium">
                  <dt className="text-gray-500">Phone</dt>
                  <dd className="text-gray-900">+84 921 208 550</dd>
                </div>
                <div className="py-3 flex items-center justify-between text-sm font-medium">
                  <dt className="text-gray-500">Address</dt>
                  <dd className="text-gray-900">Danang, Vietnam</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        {/* Map Embed Section */}
        <div className="mt-6">
          <iframe
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9250726479345!2d108.22257669999999!3d16.069377499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421833d5d51043%3A0x596a384ad09764ee!2zVMOyYSBOaMOgIFZOUFQgxJDDoCBO4bq1bmcsIDM4IFnDqm4gQsOhaSwgSOG6o2kgQ2jDonUgMSwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMA!5e0!3m2!1svi!2s!4v1708669749998!5m2!1svi!2s"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
