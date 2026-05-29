import axios from "axios";

export const getPredictions = async () => {

  try {

    const response = await axios.get(
      "http://127.0.0.1:8000/predict-price"
    );

    return response.data;

  } catch (error) {

    console.log("Prediction API Error:", error);

    return null;
  }
};