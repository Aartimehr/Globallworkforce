import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CurrentOpenings() {
  const navigate = useNavigate();

  const images = [
    "/current-openings/image1.jpeg",
    "/current-openings/image2.jpeg",
    "/current-openings/image3.jpeg",
    "/current-openings/image4.jpeg",
    "/current-openings/image5.jpeg",
    "/current-openings/image6.jpeg",
    "/current-openings/image7.jpeg",
    "/current-openings/image8.jpeg",
    "/current-openings/image9.jpeg",
    "/current-openings/image10.jpeg",
    "/current-openings/image11.jpeg",
    "/current-openings/image12.jpeg",
    "/current-openings/image13.jpeg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 px-4 sm:px-6 md:px-20 py-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black">
          Current International Openings
        </h1>

        <button
          onClick={() => navigate("/")}
          className="bg-white px-4 py-2 rounded-full shadow hover:bg-gray-100 transition font-medium"
        >
          ← Back
        </button>
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <img
              src={img}
              alt={`Opening ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

    </div>
  );
}
