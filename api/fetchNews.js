export default async function handler(req, res) {
  const API_KEY = process.env.NEWS_API_KEY; // Use server-side environment variable
  const API_URL = `https://newsapi.org/v2/everything?q=(cybersecurity OR "cyber security" OR "cyber attack" OR "data breach" OR "ransomware" OR "malware" OR "phishing" OR "hackers" OR "cybercrime" OR "cyber threat")&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
