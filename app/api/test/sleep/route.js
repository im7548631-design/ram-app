export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const ms = parseInt(searchParams.get("ms") || "1000", 10);
  
  await new Promise((resolve) => setTimeout(resolve, ms));
  
  return Response.json({
    status: "success",
    slept_ms: ms
  });
}
