import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const {
        users_ner,
        users_password,
    } = req.body;

    const sql =
      'INSERT INTO users ( users_ner, users_password) VALUES (?, ?)';

    const [result] = await db
      .promise()
      .execute(sql, [
        users_ner,
        users_password,
      ]);

    res.status(200).json({ data: result });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}