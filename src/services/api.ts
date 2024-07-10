// api.ts

import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL!;

// Function to fetch Instagram post data
export const getImageUrlData = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching Instagram data: ${error}`);
  }
};
