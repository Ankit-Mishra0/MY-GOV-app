import express from "express";
import db from "../db/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Signup Route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existing = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const hash = await bcrypt.hash(password, 10);
    const result = await db.query(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, email,username",
      [username, email, hash]
    );

    const token = jwt.sign({ id: result.rows[0].id }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({
      token,
      userId: result.rows[0].id,
      email: result.rows[0].email,
      username: result.rows[0].username,
    });
  } catch (err) {
    res.status(500).json({ error: "Signup failed" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length === 0)
      return res.status(400).json({ error: "User not found" });

    const valid = await bcrypt.compare(password, result.rows[0].password_hash);
    if (!valid) return res.status(401).json({ error: "Invalid password" });

    const token = jwt.sign({ id: result.rows[0].id }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({
        token,
        userId: result.rows[0].id,
        email: result.rows[0].email,
        username: result.rows[0].username, 
      });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

export default router;
