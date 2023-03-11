import { ForecastResponse } from "../api/types";
import { RowData } from "../components/summary/types";

export function mapForecastResponseToRowData(
  forecastResponse: ForecastResponse
): RowData[] {
  const { daily, latitude, longitude } = forecastResponse;
  const cityName = `Lat: ${latitude} Long: ${longitude}`;

  const rowData = daily.time.map((time, index) => {
    const min = daily.temperature_2m_min[index];
    const max = daily.temperature_2m_max[index];

    return {
      min,
      max,
      cityName: `${cityName} ${time}`,
    };
  });

  return rowData;
}
