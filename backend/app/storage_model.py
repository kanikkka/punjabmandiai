def storage_tracker():

    storages = [

        {

            "name":
            "Ludhiana Cold Hub",

            "capacity":
            1000,

            "used":
            820,

        },

        {

            "name":
            "Amritsar Storage",

            "capacity":
            1200,

            "used":
            660,

        },

        {

            "name":
            "Patiala Agri Storage",

            "capacity":
            900,

            "used":
            700,

        },

    ]

    results = []

    for storage in storages:

        occupancy = (

            storage["used"]

            / storage["capacity"]

        ) * 100

        available = (
            100 - occupancy
        )

        spoilage_risk = (

            "High"

            if occupancy > 85

            else "Low"

        )

        results.append({

            "name":
            storage["name"],

            "occupancy":
            round(occupancy, 2),

            "available":
            round(available, 2),

            "spoilage_risk":
            spoilage_risk,

        })

    best_storage = sorted(

        results,

        key=lambda x:
        x["occupancy"]

    )[0]

    return {

        "best_storage":
        best_storage,

        "all_storages":
        results,

    }