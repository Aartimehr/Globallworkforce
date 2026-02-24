import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MySQL Connection Pool (Configured for Aiven + Vercel)
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  // Changed to false so Aiven connects without needing a physical .pem certificate file
  ssl: { rejectUnauthorized: false } 
});

// ==============================
// Candidate Form API
// ==============================
app.post("/api/submit", async (req, res) => {
  try {
    const { name, email, phone, designation, country } = req.body;

    // Table name updated to 'candidateform' to match your SQL
    const query = `
      INSERT INTO candidateform 
      (fullName, email, phoneNumber, designation, country)
      VALUES (?, ?, ?, ?, ?)
    `;

    await db.execute(query, [
      name,         // Maps to fullName
      email,        // Maps to email
      phone,        // Maps to phoneNumber
      designation,  // Maps to designation
      country,      // Maps to country
    ]);

    res.status(200).json({ status: "success", message: "Candidate data saved" });
  } catch (error) {
    console.error("Candidate Submit Error:", error);
    res.status(500).json({
      status: "error",
      message: "Database connection failed",
      details: error.message
    });
  }
});

// ==============================
// Contact Us API
// ==============================
app.post("/api/contact-submit", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Table name updated to 'contactus' and column names set to lowercase to match SQL
    const query = `
      INSERT INTO contactus 
      (name, email, phone, message)
      VALUES (?, ?, ?, ?)
    `;

    await db.execute(query, [
      name || null,
      email || null,
      phone || null,
      message || null,
    ]);

    res.status(200).json({ status: "success", message: "Message sent" });
  } catch (error) {
    console.error("Contact Submit Error:", error);
    res.status(500).json({
      status: "error",
      message: "Database connection failed",
      details: error.message
    });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running 🚀" });
});

// ==============================
// Export for Vercel
// ==============================
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () =>
    console.log(`✅ Local Server running on port ${PORT}`)
  );
}

// Since you are using "import", Vercel prefers "export default" 
// if your package.json has "type": "module"
export default app;