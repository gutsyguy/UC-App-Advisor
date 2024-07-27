import Airtable from 'airtable';
import {NextRequest, NextResponse} from 'next/server'


const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base("appVDDauiNUxWdkYo");

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      const record = await base('Emails').create([{ email }]);
      res.status(200).json({ record });
    } catch (err:any) {
      res.status(500).json({ err: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
