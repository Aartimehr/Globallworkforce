import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      // UPDATED: Changed from http://localhost:5000 to relative path for Vercel
      const response = await fetch("/api/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setFormSubmitted(true);
        setSubmissionMessage("We’ll call you shortly 🚀");
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", message: "" });
          setFormSubmitted(false);
          setSubmissionMessage(null);
        }, 6000);
      } else {
        alert("Error: " + (result.message || "Something went wrong"));
      }
    } catch (error) {
      console.error(error);
      // UPDATED: More professional error message for live users
      alert("We are currently experiencing technical difficulties. Please try again later.");
    }
  };

  return (
    <div className="bg-contactus w-full bg-cover bg-center flex flex-col items-center p-4 sm:p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full sm:max-w-md p-6 sm:p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg"
      >
        {formSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-600">Thank You!</h2>
            <p className="text-base sm:text-lg text-gray-700">{submissionMessage}</p>
          </div>
        ) : (
          <form onSubmit={submitForm} className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-blue-500">
              Request <span className="text-blue-600">a call</span>
            </h1>
            {["name","email","phone","message"].map(field => (
              <div key={field}>
                <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-1 capitalize">{field}</label>
                {field==="message" ? (
                  <textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 outline-none text-black"
                  />
                ) : (
                  <input
                    type={field==="email"?"email":"text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500 outline-none text-black ${errors[field] ? "border-red-500" : "border-gray-300"}`}
                  />
                )}
                {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all font-bold"
            >
              Request a Call
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}