import axios from "axios";

export const getMandiPrices = async () => {

  try {

    const response = await axios.get(
      "https://punjabmandiai-1.onrender.com/mandi-prices"
    );

    // API records
    return response.data.records || response.data.fallback_data;

  } catch (error) {

    console.log("Frontend API Error:", error);

    return [];
  }
};