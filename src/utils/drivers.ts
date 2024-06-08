// utils/openF1Api.ts
import axios from 'axios';

const BASE_URL = 'https://api.openf1.org/v1';

interface DriverDataParams {
  driver_number?: number;
  session_key?: string;
}

export const getDriverData = async (params?: DriverDataParams) => {
  try {
    const response = await axios.get(`${BASE_URL}/drivers`, {
      params: params
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching driver data:', error);
    throw error;
  }
};