import sqlite3


def create_connection():

    connection = sqlite3.connect(
        "mandi_ai.db",
        check_same_thread=False
    )

    return connection


conn = create_connection()

cursor = conn.cursor()


cursor.execute("""

CREATE TABLE IF NOT EXISTS predictions (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    crop TEXT,

    price INTEGER,

    mandi TEXT

)

""")


conn.commit()