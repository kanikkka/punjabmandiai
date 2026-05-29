import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const getWeatherData = async (city) => {
  try {

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    return response.data;

  } catch (error) {

    console.log("Weather API Error:", error);

    return null;
  }
};