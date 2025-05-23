"use client";
import { motion } from "framer-motion"; // Ensure motion is correctly imported
import {
  FaUserMd, 
  FaShieldAlt,
  FaUserNurse,
  FaHandsHelping,
} from "react-icons/fa"; // Ensure icons are imported correctly

const WhyChooseUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-12 px-6 md:px-20 bg-white text-center"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex justify-center items-center text-green-700 text-sm font-semibold tracking-wide">
        <h3 className="mx-[-1.5rem] md:mx-[-5rem] flex items-center gap-4 text-[#99b760] font-semibold text-xl md:text-3xl font-playfair-display uppercase tracking-wider pb-2 md:pb-4">
            {/* Left Side Lines */}
            <span className="flex flex-col gap-[5px] mt-2 transform scale-x-[-1]">
              <span className="w-12 h-[2px] bg-[#99b760]"></span>
              <span className="w-20 h-[2px] bg-[#99b760]"></span>
            </span>
            <span className="block md:inline">
              Why Choose Us 
            </span>
            <span className="flex flex-col gap-[5px] mt-2">
              <span className="w-12 h-[2px] bg-[#99b760]"></span>
              <span className="w-20 h-[2px] bg-[#99b760]"></span>
            </span>
          </h3>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight md:leading-[1.3] font-serif">
          Why Choose Us? Reclaim Your Health and Vitality
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed text-justify">
          Choose i-revive for expert care, a safe environment, and personalized
          Hijama sessions that promote natural healing and balance. Your
          wellness is our priority.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-8 px-6 lg:px-6">
        {[ 
          {
            icon: (
              <FaUserMd className="text-primary text-6xl mb-4 transition duration-300 group-hover:scale-110 group-hover:text-white" />
            ),
            title: "Certified and Experienced Practitioners",
            description:
              "Our team is composed of certified Hijama practitioners with extensive experience, backed by collaboration with medical professionals to ensure safe, effective and informed care.",
          },
          {
            icon: (
              <FaShieldAlt  className="text-primary text-6xl mb-4 transition duration-300 group-hover:scale-110 group-hover:text-white" />
            ),
            title: "Top-Tier Hygiene and Client Privacy",
            description:
              "We maintain the highest standards of hygiene and strict confidentiality, comparable to modern medical facilities, to ensure your safety, dignity and peace of mind during every session.",
          },
          {
            icon: (
              <FaUserNurse  className="text-primary text-6xl mb-4 transition duration-300 group-hover:scale-110 group-hover:text-white" />
            ),
            title: "Female-Centric Care and Comfort",
            description:
              "We provide dedicated private booths for all female clients, complete with gowns, and ensure that only female practitioners attend to female clients, creating a respectful, safe, and modest environment",
          },
          {
            icon: (
              <FaHandsHelping  className="text-primary text-6xl mb-4 transition duration-300 group-hover:scale-110 group-hover:text-white" />
            ),
            title: "Holistic and Personalized Approach",
            description:
              "We look beyond symptoms, identifying root causes of illness — whether physical, lifestyle-related, or metaphysical — and offer a personalized plan integrating Hijama, nutrition, lifestyle adjustments and where needed, Ruqyah guidance for comprehensive healing.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden border border-primary hover:border-green-600 rounded-xl p-6 md:p-8 flex flex-col items-center text-left shadow-md transition-all duration-300 group"
          >
            {/* Background overlay animation */}
            <div className="absolute inset-0 bg-primary w-0 h-full left-0 top-0 transition-all duration-500 ease-in-out group-hover:w-full"></div>

            {/* Content stays on top */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {feature.icon}
              <h4 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-white mt-4 transition-colors duration-500 ">
                {feature.title}
              </h4>
              <p className="text-gray-600 group-hover:text-gray-100 text-lg mt-3 leading-relaxed transition-colors duration-500 text-center">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
