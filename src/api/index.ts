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
      daily: "temperature_2m_max,temperature_2m_min",
      forecast_days: "1",
      timezone: "America/Sao_Paulo",
    },
  });
  return response.data;
};
