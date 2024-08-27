// app/api/model/route.ts
import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const connectionString = 'postgresql://postgres.anrsmxgctynbqmtgailj:arzpk7952r123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres';

const pool = new Pool({
  connectionString: connectionString,
});

// Named export for the POST method
export async function POST(req: Request) {
  const { modelName, description, fileLink, email, phone } = await req.json();

  if (!modelName || !description || !fileLink || !email || !phone) {
    return NextResponse.json({ message: 'Please fill in all fields.' }, { status: 400 });
  }

  try {
    const query = 'INSERT INTO model_submissions (model_name, description, file_link, email, phone) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(query, [modelName, description, fileLink, email, phone]);

    return NextResponse.json({ message: 'Data saved to PostgreSQL successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Error saving data to PostgreSQL.' }, { status: 500 });
  }
}