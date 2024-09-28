import { NextResponse } from "next/server";

export async function GET() {
  const data = { message: "Hello from the webhook!" };
  return NextResponse.json(data);
}
