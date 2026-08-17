import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/order", upload.single("requirements"), async (req, res) => {
  try {
    const {
      fullName,
      email,
      mobile,
      college,
      branchYear,
      category,
      title,
      description,
      budget,
      deliveryDate,
      additionalRequirements,
    } = req.body;

    const receiverEmail = process.env.ORDER_RECEIVER_EMAIL || "amityaduvanshi203@gmail.com";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return res.status(500).json({
        success: false,
        message: "Email service is not configured. Please set SMTP_USER and SMTP_PASS in .env.",
      });
    }

    const requirements = req.file;
    const requirementsList = typeof additionalRequirements === "string"
      ? JSON.parse(additionalRequirements || "{}")
      : additionalRequirements || {};

    const selectedRequirements = Object.entries(requirementsList)
      .filter(([, value]) => value)
      .map(([key]) => key.replace(/([A-Z])/g, " $1").trim());

    const bodyText = `New Project Order Request\n\n` +
      `Full Name: ${fullName || "-"}\n` +
      `Email: ${email || "-"}\n` +
      `Mobile: ${mobile || "-"}\n` +
      `College/School: ${college || "-"}\n` +
      `Branch & Year: ${branchYear || "-"}\n` +
      `Project Category: ${category || "-"}\n` +
      `Project Title: ${title || "-"}\n` +
      `Project Description: ${description || "-"}\n` +
      `Budget: ₹${budget || "-"}\n` +
      `Delivery Date: ${deliveryDate || "-"}\n\n` +
      `Additional Requirements:\n${selectedRequirements.length > 0 ? selectedRequirements.map((item) => `- ${item}`).join("\n") : "- None"}\n\n` +
      `File Attached: ${requirements ? requirements.originalname : "No file attached"}`;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `Electrixa Orders <${smtpUser}>`,
      to: receiverEmail,
      subject: `New Project Order Request from ${fullName || "a client"}`,
      text: bodyText,
      attachments: requirements ? [
        {
          filename: requirements.originalname,
          content: requirements.buffer,
          contentType: requirements.mimetype,
        },
      ] : [],
    });

    res.json({
      success: true,
      message: "Your order request was sent successfully. The team will contact you soon.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to send the order request. Please try again later.",
    });
  }
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
