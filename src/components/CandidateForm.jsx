import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CandidateForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    designation: '',
    country: ''
  });
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState(null);
  const [formVisible, setFormVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone Number is required';
    else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Invalid phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    if (!validateForm()) return;

    try {
      
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          designation: formData.designation,
          country: formData.country,
          source: 'candidateform'
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setSubmissionMessage('All the best! Your application has been saved.');
        setFormVisible(false);
        setTimeout(() => {
          setFormData({ fullName: '', email: '', phoneNumber: '', designation: '', country: '' });
          setFormVisible(true);
          setSubmissionMessage(null);
        }, 6000);
      } else {
        alert('Error: ' + (result.message || 'Submission failed'));
      }
    } catch (error) {
      console.error('Submission error:', error);
      // UPDATED: Updated message to be more professional for a live site
      alert('We encountered a problem sending your application. Please try again later.');
    }
  };

  const fadeSlide = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-CandidateForm w-full bg-cover bg-center flex flex-col items-center p-4 sm:p-6 md:p-12">
      <AnimatePresence>
        {formVisible ? (
          <motion.div
            key="form"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeSlide}
            className="w-full sm:max-w-3xl md:max-w-4xl bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-6 sm:p-10"
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-4">How to Apply</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { step: 1, text: "Fill Your Personal Details" },
                  { step: 2, text: "Choose Your Designation & Country" },
                  { step: 3, text: "Submit Form for Review" },
                  { step: 4, text: "Get Confirmation & Next Steps" }
                ].map(({ step, text }) => (
                  <div key={step} className="bg-blue-50 p-4 rounded-lg shadow text-center">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500">{step}</span>
                    <p className="mt-2 text-sm sm:text-base md:text-base text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-blue-500">
              Candidate <span className="text-blue-600">Form</span>
            </h1>
            <div className="space-y-4">
              {["fullName","email","phoneNumber","designation","country"].map(field => (
                <div key={field}>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                  {field === "designation" || field === "country" ? (
                    <select
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 text-black"
                    >
                      <option value=""></option>
                      {field==="designation" && <>
                        <option value="Construction Worker">Construction Worker</option>
                        <option value="General Labourer">General Labourer</option>
                        <option value="Cleaner">Cleaner</option>
                        <option value="Minibus Driver">Minibus Driver</option>
                        <option value="Warehouse/General Worker">Warehouse/General Worker</option>
                      </>}
                      {field==="country" && <>
                        <option value="Europe">Europe Countries</option>
                        <option value="Gulf Countries">Gulf Countries</option>
                      </>}
                    </select>
                  ) : (
                    <input
                      type={field==="email"?"email":"text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 text-black"
                    />
                  )}
                  {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                </div>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={submitForm}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
            >
              Register Now
            </motion.button>
          </motion.div>
        ) : (
          submissionMessage && (
            <motion.div
              key="message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-3xl bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 text-center"
            >
              <p className="text-blue-600 text-lg sm:text-xl">{submissionMessage}</p>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}