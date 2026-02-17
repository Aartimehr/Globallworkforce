import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CandidateForm from "./CandidateForm";
import { Link } from "react-router-dom";

export default function Landing() {
  const [showForm, setShowForm] = useState(false);
  const [showJobs, setShowJobs] = useState(false);

  const jobs = [
    "Cleaner",
    "Warehouse Helper",
    "Sweeper",
    "Factory Labour",
  ];

  const whyChooseUs = [
    "Trusted International Recruitment Network",
    "Fast & Transparent Hiring Process",
    "Verified Employers Across Europe & Gulf",
    "Legal Documentation & Visa Assistance",
    "On-time Placement Support",
    "24/7 Candidate Assistance",
  ];

  // ✅ NEW: CURRENT OPENINGS DATA (correct placement)
  const currentOpenings = [
    {
      title: "Warehouse Worker",
      country: "Czech Republic",
      salary: "125–135 CZK / Hour",
      hours: "8–12 hrs/day | 5 days a week",
      age: "20–55 Years",
      benefits: ["Accommodation and Transportation provided by the company"],
      processing: "6 Weeks",
      Nationality: "All Countries except Nigeria"
    },
    {
      title: "Kitchen Worker",
      country: "Czech Republic",
      salary: "25000 CZK / month (During Internship)"|"40000 CZK / month (After Internship)",
      hours: "8–10 hrs/day | 5 days a week",
      age: "20–55 Years",
      benefits: ["Accommodation and Transportation provided by the company"],
      processing: "30 Working Days",
      Nationality: "All Countries"
    },
    {
      title: "Construction Worker",
      country: "Czech Republic",
      salary: "25000 CZK / month (During Internship)"|"40000 CZK / month (After Internship)",
      hours: "8–10 hrs/day | 5 days a week",
      age: "20–55 Years",
      benefits: ["Accommodation and Transportation provided by the company"],
      processing: "30 Working Days",
      Nationality: "All Countries"
    },
    {
      title: "Production Worker",
      country: "Czech Republic",
      salary: "25000 CZK / month (During Internship)"|"40000 CZK / month (After Internship)",
      hours: "8–10 hrs/day | 5 days a week",
      age: "20–55 Years",
      benefits: ["Accommodation and Transportation provided by the company"],
      processing: "30 Working Days",
      Nationality: "All Countries"
    },
     {
      title: "Cleaning Worker",
      country: "Czech Republic",
      salary: "25000 CZK / month (During Internship)"|"40000 CZK / month (After Internship)",
      hours: "8–10 hrs/day | 5 days a week",
      age: "20–55 Years",
      benefits: ["Accommodation and Transportation provided by the company"],
      processing:"30 Working Days",
      Nationality: "All Countries"
    },
    {
      title: "Driver",
      country: "Czech Republic",
      salary: "25000 CZK / month (During Internship)"|"40000 CZK / month (After Internship)",
      hours: "8–10 hrs/day | 5 days a week",
      age: "20–55 Years",
      benefits: ["Accommodation and Transportation provided by the company"],
      processing:"30 Working Days",
      Nationality: "All Countries"
    },
     
    {
      title: "Tree Trimmer",
      country: "Czech Republic",
      salary: "21400-25000 CZK / month ",
      hours: "8–10 hrs/day | 5 days a week",
      age: "20–55 Years",
      benefits: ["Accommodation and Transportation provided by the company"],
      processing: "30 Working Days",
      Nationality: "All Countries"
    },
     {
      title: "General Worker",
      country: "Czech Republic",
      salary: "21400-25000 CZK / month ",
      hours: "8–10 hrs/day | 5 days a week",
      age: "20–55 Years",
      benefits: ["Accommodation and Transportation provided by the company"],
      processing: "30 Working Days",
      Nationality: "All Countries"
    },
    {
      title: "Rubber Covering Manufacturing Worker",
      country: "Czech Republic",
      salary: "130 CZK / hour ",
      hours: "8–12 hrs/day | 5 days a week",
      age: "20–55 Years",
      benefits: ["Accommodation and Transportation provided by the company"],
      processing: "6 Weeks",
      Nationality: "All Countries except Nigeria"
    },
   {
      title: "Taxi Driver",
      country: "Czech Republic",
      salary: "30000 CZK / month",
      hours: "8–10 hrs/day | 5 days a week",
      age: "20–55 Years",
      benefits: ["Accommodation and Transportation provided by the company"],
      processing: "6 weeks",
      Nationality: "All Countries except Nigeria"
    },
    {
      title: "Special Equipment Driver",
      country: "Czech Republic",
      salary: "25000-35000 CZK / month",
      hours: "8–10 hrs/day | 5 days a week",
      age: "20–55 Years",
      benefits: ["Accommodation and Transportation provided by the company"],
      processing: "30 working days",
      Nationality: "All Countries"
    },
     {
      title: "Forklift Driver",
      country: "Czech Republic",
      salary: "160 CZK /hour",
      hours: "8–12 hrs/day | 5 days a week",
      age: "20–55 Years",
      benefits: ["Accommodation and Transportation provided by the company"],
      processing: "6 weeks",
      Nationality: "All Countries except Nigeria"
    },
  ];
   const currentOpenings1 = [
    {
      title: "Minibus Driver",
      country: "Serbia",
      For: "Men",
      salary: "465 serbian dinars/ Hour",
      hours: "168 working hrs/month ",
      WorkingDays: "Monday-Saturday",
      age: "18–50 Years",
      benefits: ["Accommodation and Transportation provided by the company"]
      
    },
     {
      title: "Warehouse/General Worker",
      country: "Serbia",
      For: "Men And Women",
      salary: "600-700 serbian dinars/month",
      hours: "8 hrs/day",
      WorkingDays: "shift hours",
      age: "under age of 55",
      benefits: ["Accommodation and Transportation provided by the company"]
      
    },
     {
      title: "Cleaners",
      country: "Serbia",
      For: "Men and Women",
      salary: "465 serbian dinars/ Hour",
      hours: "168 working hrs/month | 8-hours/day ",
      WorkingDays: "Monday-Saturday",
      age: "18–50 Years",
      benefits: ["Accommodation and Transportation provided by the company"]
      
    },
     {
      title: "General Labourer",
      country: "Serbia",
      For: "Men",
      salary: "465 serbian dinars/ Hour",
      hours: "168 working hrs/month ",
      WorkingDays: "Monday-Saturday",
      age: "18–50 Years",
      benefits: ["Accommodation and Transportation provided by the company"] 
    },
     {
      title: "Construction Worker",
      country: "Serbia",
      For: "Men and Women",
      salary: "600-700 USD/ Month",
      hours: "8-10 hrs/day ",
      WorkingDays: "5 Days a week",
      age: "under age of 55",
      benefits: ["Accommodation and Transportation provided by the company"] 
    },

];

  useEffect(() => {
    document.body.style.overflow = showForm || showJobs ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm, showJobs]);

  const Country = ({ name, code }) => (
    <div className="flex items-center gap-3 hover:scale-105 transition">
      <img
        src={`https://flagcdn.com/w40/${code}.png`}
        alt={name}
        className="w-8 h-6 object-cover rounded shadow"
      />
      <span>{name}</span>
    </div>
  );

  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="h-[80vh] relative">
        <img
          src="/landingpage.png"
          alt="Landing"
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col justify-top items-center md:items-end h-full px-4 sm:px-6 md:px-20 space-y-11">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-extrabold text-white"
          >
            Trusted Pathways to International Jobs
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg transition hover:scale-105"
            >
              Get Started
            </button>
            <button
              onClick={() => setShowJobs(true)}
              className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* ================= REGISTER MODAL ================= */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-10 rounded-2xl shadow-2xl relative"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
              >
                ✕
              </button>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black text-center">
                Candidate Registration
              </h2>
              <CandidateForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CURRENT OPENINGS ================= */}
      <section className="py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-br from-blue-100 to-blue-300 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-black mb-14"
        >
          Current International Openings - Czech Republic
        </motion.h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 95, ease: "linear" }}
          >
            {[...currentOpenings, ...currentOpenings].map((job, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="min-w-[320px] bg-white rounded-2xl shadow-xl p-6 border"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-1">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">📍 {job.country}</p>

                <div className="text-sm text-gray-700 space-y-1">
                  <p><strong>Salary:</strong> {job.salary}</p>
                  <p><strong>Hours:</strong> {job.hours}</p>
                  <p><strong>Age:</strong> {job.age}</p>
                  <p><strong>Processing:</strong> {job.processing}</p>
                  <p><strong>Nationality:</strong> {job.Nationality}</p>
                </div>

                <div className="flex gap-2 flex-wrap mt-4">
                  {job.benefits.map((b, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full"
                    >
                      {b}
                    </span>
                  ))}
                </div>

               <div className="mt-6 flex gap-3">
  <button
                  onClick={() => setShowForm(true)}
                  className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-full font-semibold transition"
                >
                  Apply Now
                </button>

<Link to="/current-openings">
  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded ml-4">
    Know More
  </button>
</Link>

</div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
       <section className="py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-br from-blue-100 to-blue-300 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-black mb-14"
        >
          Current International Openings - Serbia
        </motion.h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 65, ease: "linear" }}
          >
            {[...currentOpenings1, ...currentOpenings1].map((job, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="min-w-[320px] bg-white rounded-2xl shadow-xl p-6 border"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-1">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">📍 {job.country}</p>

                <div className="text-sm text-gray-700 space-y-1">
                  <p><strong>Salary:</strong> {job.salary}</p>
                  <p><strong>Hours:</strong> {job.hours}</p>
                  <p><strong>Age:</strong> {job.age}</p>
                  <p><strong>For:</strong> {job.For}</p>
                  <p><strong>Working Days:</strong> {job.WorkingDays}</p>
                </div>

                <div className="flex gap-2 flex-wrap mt-4">
                  {job.benefits.map((b, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setShowForm(true)}
                  className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-full font-semibold transition"
                >
                  Apply Now
                </button>
                
<Link to="/current-openings">
  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded ml-4">
    Know More
  </button>
</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 bg-blue-500 overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          Why Choose Globalworkforce?
        </h2>
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...whyChooseUs, ...whyChooseUs].map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white shadow-xl rounded-xl p-6 text-center font-medium text-black"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
