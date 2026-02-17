import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" }
};

const Services = () => {
  const servicesData = [
    {
      title: "Fresh Updates on jobs",
      description:
        "Get the latest updates on job openings, industry trends, and career advice to stay ahead in your job search journey."
    },
    {
      title: "Guidance and Support",
      description:
        "Get real-time updates on job opportunities, career advice, and professional development resources."
    },
    {
      title: "Visa and Work Permit Assistance",
      description:
        "Receive expert guidance and support for visa applications and work permits, ensuring a smooth transition to your new job abroad."
    },
    {
      title: "Global Networking",
      description:
        "Connect with professionals and job seekers from around the world to expand your network and career opportunities."
    }
  ];

  return (
    <div className="bg-service w-full bg-cover bg-center py-10 sm:py-12 md:py-20 flex justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        className="max-w-full sm:max-w-3xl md:max-w-6xl px-4 sm:px-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8">
          <span className="text-blue-500">Services </span>
          <span className="text-blue-700">at Globalworkforce</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-item border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-md bg-white/80 backdrop-blur-md cursor-pointer hover:shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-500">{service.title}</h3>
              <p className="text-sm sm:text-base text-black">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
