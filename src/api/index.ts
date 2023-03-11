import axios from "axios";
import { ForecastResponse } from "./types";

const API_BASE_URL = "https://api.open-meteo.com/v1/";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getForecast = async (
  latitude: number,
  longitude: number
): Promise<ForecastResponse> => {
  const response = await api.get(`forecast`, {
    params: {
      latitude,
      longitude,
      hourly: "temperature_2m",
    },
  });
  return response.data;
};
