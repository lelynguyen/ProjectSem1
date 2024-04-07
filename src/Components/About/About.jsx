import React from "react";

const About = () => {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 text-justify">
            Welcome to Star Classes – your illuminating partner in the
            educational journey for over a decade. We're more than just a
            teaching center; we're a beacon for knowledge and passion. From our
            modest beginnings, we've prided ourselves on being companions and
            inspirers, sparking a love for learning in every student. Evolving
            from our extensive promotion through newspapers and TV, we're
            thrilled to embrace the digital revolution, connecting learners
            across the virtual landscape where curiosity meets opportunity..
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            Our Mission
          </h2>
          <p className="mt-2 text-gray-500 text-justify">
            Star Classes is dedicated to delivering a high-quality education
            accessible to all. We pledge to harness the power of the internet to
            break down geographical barriers, offering a smooth and adaptable
            learning voyage across the boundless seas of knowledge. With every
            course, every lesson, we strive to impart wisdom and ignite the
            spark of discovery and relentless growth in you.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            Our Vision
          </h3>
          <p className="mt-2 text-gray-500">
            Our vision is to be a trusted lighthouse, guiding the youth to the
            shores of success and self-assuredness. At Star Classes, we
            continuously innovate and update our teaching methodologies to
            fulfill our aspirations of equipping students with not just academic
            prowess, but also the strength of character and life skills. We
            dream of a learning community where every individual has the chance
            to uncover and polish the hidden star within.
          </p>
        </div>
        <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl transform translate-x-4 translate-y-6 rotate-6 lg:translate-x-16 lg:-translate-y-24 lg:rotate-12">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1499343628900-3521f6be8e8e"
            alt="About image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
