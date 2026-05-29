from datetime import datetime


def festival_effect_model():

    current_month = (
        datetime.now().month
    )

    current_price = 2400

    predicted_change = 0

    reason = "Normal Market"

    # FESTIVAL LOGIC

    if current_month in [10, 11]:

        predicted_change += 8

        reason = (
            "Diwali Demand Spike"
        )

    elif current_month == 4:

        predicted_change += 5

        reason = (
            "Baisakhi Harvest Season"
        )

    elif current_month == 1:

        predicted_change -= 3

        reason = (
            "Winter Demand Slowdown"
        )

    # MSP IMPACT

    msp_active = True

    if msp_active:

        predicted_change += 4

    predicted_price = (

        current_price +

        (
            current_price
            * predicted_change
            / 100
        )

    )

    return {

        "current_price":
        current_price,

        "predicted_price":
        round(predicted_price, 2),

        "change_percent":
        predicted_change,

        "reason":
        reason,

    }