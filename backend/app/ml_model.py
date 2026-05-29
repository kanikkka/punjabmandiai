import pandas as pd

import numpy as np

import requests

from sklearn.ensemble import RandomForestRegressor


# =========================
# WEATHER FETCH FUNCTION
# =========================

def fetch_weather():

    try:

        api_key = (
            "7681a5bb25e9c397192b46df1822c8b4"
        )

        city = "Punjab"

        url = (
            "https://api.openweathermap.org/data/2.5/weather"
        )

        params = {

            "q": city,

            "appid": api_key,

            "units": "metric",

        }

        response = requests.get(
            url,
            params=params
        )

        data = response.json()

        return {

            "temperature":
            data["main"]["temp"],

            "humidity":
            data["main"]["humidity"],

            "weather":
            data["weather"][0]["main"],

        }

    except Exception as e:

        print(e)

        return {

            "temperature": 30,

            "humidity": 50,

            "weather": "Unknown",

        }


# =========================
# AI PRICE PREDICTION
# =========================

def predict_prices():

    try:

        # LOAD DATASET

        df = pd.read_csv(
            "data/mandi_prices.csv"
        )

        # LIMIT DATA

        df = df.head(100)

        prices = []

        # CLEAN PRICE COLUMN

        for value in df["modal_price"]:

            try:

                prices.append(
                    float(value)
                )

            except:

                continue

        # CHECK DATA

        if len(prices) < 5:

            return {

                "prediction":
                "Not enough data"

            }

        # PREPARE TRAINING DATA

        X = np.array(
            range(len(prices))
        ).reshape(-1, 1)

        y = np.array(prices)

        # TRAIN MODEL
        model = RandomForestRegressor(

    n_estimators=100,

    random_state=42

)



        model.fit(X, y)

        # FUTURE PREDICTION

        future_day = np.array(
            [[len(prices) + 7]]
        )

        prediction = model.predict(
            future_day
        )[0]

        # WEATHER FEATURES

        weather_data = fetch_weather()

        temperature = weather_data[
            "temperature"
        ]

        humidity = weather_data[
            "humidity"
        ]

        weather = weather_data[
            "weather"
        ]

        # WEATHER IMPACT LOGIC

        if temperature > 35:

            prediction += 120

        if humidity > 70:

            prediction -= 80

        # CURRENT PRICE

        current_price = prices[-1]

        # CHANGE %

        change = (
            (
                prediction -
                current_price
            )
            / current_price
        ) * 100

        trend = (
            "increase"
            if change > 0
            else "decrease"
        )

        # FINAL RESPONSE

        return {

            "current_price":
            round(current_price, 2),

            "predicted_price":
            round(prediction, 2),

            "trend":
            trend,

            "change_percent":
            round(change, 2),

            "temperature":
            round(temperature, 2),

            "humidity":
            humidity,

            "weather":
            weather,

        }

    except Exception as e:

        return {

            "error": str(e)

        }