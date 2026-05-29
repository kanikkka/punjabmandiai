import pandas as pd

from sklearn.model_selection import (
    train_test_split
)

from sklearn.preprocessing import (
    LabelEncoder
)

from xgboost import XGBRegressor

from sklearn.metrics import (
    mean_absolute_error
)

import joblib


# LOAD DATASET

df = pd.read_csv(
    "data/mandi_prices.csv"
)


# CLEAN COLUMN NAMES

df.columns = [
    col.strip().replace(" ", "_")
    for col in df.columns
]


# FILTER IMPORTANT CROPS

df = df[
    df["Commodity"].isin(
        ["Wheat", "Rice"]
    )
]


# REMOVE MISSING VALUES

df = df.dropna()


# ENCODING

commodity_encoder = LabelEncoder()

market_encoder = LabelEncoder()

df["Commodity"] = (
    commodity_encoder.fit_transform(
        df["Commodity"]
    )
)

df["Market_Name"] = (
    market_encoder.fit_transform(
        df["Market_Name"]
    )
)


# FEATURES

X = df[[
    "Commodity",
    "Market_Name",
    "Min_Price",
    "Max_Price",
]]


# TARGET

y = df["Modal_Price"]


# TRAIN TEST SPLIT

X_train, X_test, y_train, y_test = (
    train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42
    )
)


# MODEL

model = XGBRegressor()

model.fit(
    X_train,
    y_train
)


# PREDICTIONS

predictions = model.predict(
    X_test
)


# EVALUATION

mae = mean_absolute_error(
    y_test,
    predictions
)

print(
    f"MAE: {mae}"
)


# SAVE MODEL

joblib.dump(
    model,
    "model.pkl"
)

joblib.dump(
    commodity_encoder,
    "commodity_encoder.pkl"
)

joblib.dump(
    market_encoder,
    "market_encoder.pkl"
)

print(
    "MODEL TRAINED SUCCESSFULLY"
)