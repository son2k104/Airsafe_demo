export default async function handler(req, res) {
  const { lat, lon } = req.query;
  const API_KEY = process.env.OPENWEATHER_KEY;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  const data = await response.json();
  res.status(200).json(data);
}