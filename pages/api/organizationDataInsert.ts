import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../db';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   try {
//     const {
    
//     orga_name,
//     orga_mail,
//     orga_fb,
//     orga_phone,
//     orga_users_name,
//     orga_feedback 
//     } = req.body;

//     const sql =
//       'INSERT INTO users (orga_name,  orga_mail,  orga_fb,  orga_phone,  orga_users_name,  orga_feedback ) VALUES ( ?,?,?,?,?,?)';

//     const [result] = await db.promise().execute(sql, [ orga_name,  orga_mail,orga_fb,  orga_phone, orga_users_name,    orga_feedback ]);

//     res.status(200).json({ data: result });
//   } catch (error) {
//     console.error('Error inserting data:', error);
//     res.status(500).json({ error: 'Internal Server Errorhh' });
//   }
// }
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    try {
      const {
        orga_name,
        orga_mail,
        orga_fb,
        orga_phone,
        orga_users_name,
        orga_feedback,
      } = req.body;
  
      const sql =
        'INSERT INTO Organization (orga_name, orga_mail, orga_fb, orga_phone, orga_users_name, orga_feedback) VALUES (?, ?, ?, ?, ?, ?)';
  
      const [result] = await db.promise().execute(sql, [
        orga_name,
        orga_mail,
        orga_fb,
        orga_phone,
        orga_users_name,
        orga_feedback,
      ]);
  
      res.status(200).json({ data: result });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  }
  