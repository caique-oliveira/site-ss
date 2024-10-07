import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const matches = JSON.parse(jsonData).matches;
  const table = JSON.parse(jsonData).table;

  return NextResponse.json(matches, table);
}
