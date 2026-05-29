import axios from "axios";

export const getMandiPrices = async () => {

  try {

    const response = await axios.get(
      "http://127.0.0.1:8000/mandi-prices"
    );

    // API records
    return response.data.records || response.data.fallback_data;

  } catch (error) {

    console.log("Frontend API Error:", error);

    return [];
  }
};