// app/api/chat/route.ts

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const OPENAI_API_KEY = process.env.openai_key; // Ensure your OpenAI API key is set in the environment variables

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json();

    // Prepare the payload for the ChatGPT API
    const payload = {
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: `I'm a highschool/college student and my interests are ${input}. Select a couple of majors that are related to my interests and what highschool extracurricular activities you would recommend for me to do based on that.` }
      ],
      max_tokens: 200,
    };

    // Make a request to the ChatGPT API
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    // Extract the message from the API response
    const responseMessage = response.data.choices[0].message.content.trim();

    // Return the response message to the frontend
    // console.log(responseMessage);
    return NextResponse.json({ messages: [{ role: 'ai', content: responseMessage }] }, { status: 200 });
  } catch (err: any) {
    console.error('Error calling OpenAI API:', err.response ? err.response.data : err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
