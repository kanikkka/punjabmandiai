import random


def market_anomaly_detection():

    mandis = [

        "Ludhiana",

        "Amritsar",

        "Patiala",

        "Moga",

    ]

    results = []

    for mandi in mandis:

        arrivals = random.randint(
            500,
            5000
        )

        old_price = random.randint(
            2200,
            2800
        )

        new_price = old_price + random.randint(
            -400,
            300
        )

        volatility = abs(
            new_price - old_price
        )

        anomaly = "Normal"

        risk = "Low"

        if (
            arrivals > 3000
            and
            new_price < old_price - 150
        ):

            anomaly = (
                "Possible Price Suppression"
            )

            risk = "High"

        elif volatility > 250:

            anomaly = (
                "High Market Volatility"
            )

            risk = "Medium"

        results.append({

            "mandi":
            mandi,

            "arrivals":
            arrivals,

            "old_price":
            old_price,

            "new_price":
            new_price,

            "volatility":
            volatility,

            "anomaly":
            anomaly,

            "risk":
            risk,

        })

    high_risk = sorted(

        results,

        key=lambda x:
        x["volatility"],

        reverse=True

    )[0]

    return {

        "highest_risk_market":
        high_risk,

        "all_markets":
        results,

    }