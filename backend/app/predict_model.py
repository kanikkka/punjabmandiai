import joblib
import pandas as pd


# LOAD MODEL

model = joblib.load("model.pkl")

commodity_encoder = joblib.load(
    "commodity_encoder.pkl"
)

market_encoder = joblib.load(
    "market_encoder.pkl"
)


def predict_price():

    commodity = "Wheat"

    market = "Lasalgaon(Niphad)"

    min_price = 2200

    max_price = 2500


    # ENCODE

    commodity_encoded = (
        commodity_encoder.transform(
            [commodity]
        )[0]
    )

    market_encoded = (
        market_encoder.transform(
            [market]
        )[0]
    )


    # CREATE INPUT

    input_data = pd.DataFrame({

        "Commodity": [
            commodity_encoded
        ],

        "Market_Name": [
            market_encoded
        ],

        "Min_Price": [
            min_price
        ],

        "Max_Price": [
            max_price
        ]

    })


    # PREDICT

    prediction = model.predict(
        input_data
    )


    return {

        "commodity":
        commodity,

        "market":
        market,

        "predicted_price":
        round(
            float(prediction[0]),
            2
        )

    }