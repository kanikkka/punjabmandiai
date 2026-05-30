import axios from "axios";

export const getPredictions = async () => {

  try {

    const response = await axios.get(
      "https://punjabmandiai-1.onrender.com/predict-price"
    );

    return response.data;

  } catch (error) {

    console.log("Prediction API Error:", error);

    return null;
  }
};