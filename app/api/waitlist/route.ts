// app/api/waitlist/route.ts

import Airtable from 'airtable';
import { NextRequest, NextResponse } from 'next/server';

const base = new Airtable({ apiKey: process.env.api_key }).base(`${process.env.base_id_key}`);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const record = await base('Emails').create([{ fields: { Email: email } }]);

    return NextResponse.json({ record }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
