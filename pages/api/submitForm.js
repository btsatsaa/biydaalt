// pages/api/submitForm.js
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../db";
export default function handler(req, res) {
  if (req.method === "POST") {
    const { organizationName, email, facebook, phone, name, feedback } =
      req.body;
    const [formdata] = db.promise().query("SELECT * FROM customer");

    // Handle the form data (you can save it to a database, send emails, etc.)
    console.log("Organization Name:", organizationName);
    console.log("Email:", email);
    console.log("Facebook:", facebook);
    console.log("Phone:", phone);
    console.log("Name:", name);
    console.log("Feedback:", feedback);

    // Respond with a success message or any other appropriate response
    res.status(200).json({ message: "Form submitted successfully" });
  } else {
    // Respond with a 405 Method Not Allowed error for non-POST requests
    res.status(405).end();
  }
}
// pages/api/submitForm.js
// import db from "../../db";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const formData = req.body; // Assuming you're sending data in the request body
//     const [formdata] = db.promise().query("SELECT * FROM customer");
//     console.log("Organization Name:", organizationName);
//     console.log("Email:", email);
//     console.log("Facebook:", facebook);
//     console.log("Phone:", phone);
//     console.log("Name:", name);
//     console.log("Feedback:", feedback);
//     try {
//       const result = await db
//         .promise()
//         .query(
//           "INSERT INTO your_table (cus_id, cus_name, cus_mail,cus_fb,cus_users_phone, cus_offer ) VALUES (?, ?, ?,?, ?, ?,?, )",
//           [
//             formData.id,
//             formData.name,
//             formData.mail,
//             formData.facebook,
//             formData.organizationName,
//             formData.phone,
//             formData.feedback,
//           ]
//         );

//       res.status(200).json({ success: true, result });
//     } catch (error) {
//       console.error("Error in handleSubmit:", error);
//       console.error("Error inserting data:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }
////////////////////vnelgeee ogiy tr vnelgee n baiguullgiin erh dr hargday
