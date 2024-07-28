import Airtable from 'airtable';
import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';
dotenv.config();


// Initialize Airtable
const base = new Airtable({ apiKey: process.env.api_key }).base(`${process.env.base_id_key}`);

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
  organization: process.env.OPENAI_ORG_ID || '',
});

export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json();

    // If email is provided, handle waitlist functionality
    if (email) {
      const record = await base('Emails').create([{ fields: { Email: email } }]);
      return NextResponse.json({ record }, { status: 200 });
    }

    // If message is provided, handle chatbot functionality
    if (message) {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant for high school and college students. Suggest the students a major and steps to take to make it into UCs. Tell them if they are transferrring or interested in taking dual enrollment community colleges, visit assist.org to see class correlation' },
          { role: 'user', content: message },
        ],
      });

      const aiMessage = response.choices[0].message?.content;
      return NextResponse.json({ aiMessage }, { status: 200 });
    }

    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
    
  }
}
