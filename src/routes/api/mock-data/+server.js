import mockData from "$lib/mock-db.json";

export function GET() {
  return new Response(JSON.stringify(mockData), {
    headers: { "Content-Type": "application/json" }
  });
}