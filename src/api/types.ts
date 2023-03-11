interface DailyUnits {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
}

interface Daily {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export interface ForecastResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: DailyUnits;
  daily: Daily;
}
