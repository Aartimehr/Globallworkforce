import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-About w-full bg-cover bg-center flex flex-col items-center p-4 sm:p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 max-w-full sm:max-w-3xl md:max-w-5xl mx-auto"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 text-blue-500">
          About <span className="text-blue-600">GlobalworkForce</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-black mb-6 leading-relaxed text-center">
          Welcome to Globalworkforce, your ultimate destination to connect with top-tier job opportunities and showcase your professional journey.  
          We are dedicated to empowering job seekers and employers alike by providing a dynamic platform that fosters growth, collaboration, and success.  
          Whether you are an aspiring professional looking to land your dream job or an employer seeking exceptional talent, Globalworkforce is here to bridge the gap and create meaningful connections.
        </p>

        <div className="space-y-6 sm:space-y-8">
          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-2">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
              Our mission is to revolutionize the job search experience by providing a user-friendly platform that connects talented individuals with their ideal career opportunities.  
              We strive to create a vibrant community where job seekers can showcase their skills, connect with industry leaders, and access resources that empower them to achieve their professional goals.  
              At Globalworkforce, we are committed to fostering a supportive environment that promotes growth, diversity, and success for all our users.
            </p>
          </motion.section>

          {/* Worldwide Opportunities */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-2">
              We Offer Opportunities Worldwide
            </h2>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-black space-y-1 sm:space-y-2">
              <li>Work Permit</li>
              <li>Visa Assistance</li>
              <li>Free Consultations</li>
              <li>Job Opportunities</li>  
            </ul>
          </motion.section>

          {/* Join Our Journey */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center sm:text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-2">
              Join Our Journey
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
              Become a part of our growing community and take the next step in your career journey.  
              Whether you're a job seeker looking for your dream role or an employer seeking exceptional talent, Globalworkforce is here to support you every step of the way.  
              Join us today and let's create a brighter future together!
            </p>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
