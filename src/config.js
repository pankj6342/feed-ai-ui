export const baseUrl = 
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://feed-ai-server.vercel.app";
