import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MySQL Connection Pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  ssl: { rejectUnauthorized: true } 
});

// ==============================
// Candidate Form API
// ==============================
app.post("/api/submit", async (req, res) => {
  try {
    const { name, email, phone, designation, country } = req.body;

    const query = `
      INSERT INTO candidate_leads 
      (fullName, email, phoneNumber, designation, country)
      VALUES (?, ?, ?, ?, ?)
    `;

    // FIX: Changed 'pool' to 'db' to match your constant name
    await db.execute(query, [
      name,
      email,
      phone,
      designation,
      country,
    ]);

    res.status(200).json({ status: "success" });
  } catch (error) {
    console.error("Candidate Submit Error:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to submit candidate data",
    });
  }
});

// ==============================
// Contact Us API
// ==============================
app.post("/api/contact-submit", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const query = `
      INSERT INTO contact_us 
      (fname, email, PhoneNumber, Message)
      VALUES (?, ?, ?, ?)
    `;

    // FIX: Changed 'pool' to 'db'
    await db.execute(query, [
      name || null,
      email || null,
      phone || null,
      message || null,
    ]);

    res.status(200).json({ status: "success" });
  } catch (error) {
    console.error("Contact Submit Error:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to submit contact form",
    });
  }
});

app.get("/health", (req, res) => {
  res.json({ status: "Backend is running 🚀" });
});

// ==============================
// Export for Vercel (CRITICAL)
// ==============================
const PORT = process.env.PORT || 5000;

// Only listen if not running as a Vercel Function
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () =>
    console.log(`✅ Backend running on port ${PORT}`)
  );
}

export default app; // This allows Vercel to use the app