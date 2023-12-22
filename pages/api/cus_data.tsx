import { NextApiRequest, NextApiResponse } from "next";
import db from "../../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const [rows, fields] = await db
      .promise()
      .query(
        "INSERT INTO customer (cus_id, cus_name, cus_mail, cus_fb, cus_phone, cus_users_name, cus_offer)"
      );
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
