"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const markers = [

  {
    name: "Ludhiana",
    coordinates: [75.8573, 30.9000],
  },

  {
    name: "Amritsar",
    coordinates: [74.8723, 31.6340],
  },

  {
    name: "Patiala",
    coordinates: [76.4000, 30.3398],
  },

  {
    name: "Jalandhar",
    coordinates: [75.5762, 31.3260],
  },

];

export default function PunjabMap() {

  return (
    <section className="px-6 py-28">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="text-green-400 text-lg">
            Live Regional Monitoring
          </p>

          <h2 className="text-6xl font-black mt-4">

            Punjab

            <span className="text-green-400">
              {" "}Market Map
            </span>

          </h2>

          <p
            className="
              text-gray-400
              mt-8
              max-w-3xl
              mx-auto
              text-xl
              leading-9
            "
          >

            Track live mandi activities,
            crop demand, and regional
            agricultural analytics.

          </p>

        </div>

        {/* Map Card */}

        <div
          className="
            glass
            rounded-[40px]
            p-10
            overflow-hidden
            glow
          "
        >

          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 3500,
              center: [75.4, 31.1],
            }}
            style={{
              width: "100%",
              height: "500px",
            }}
          >

            <Geographies geography="https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json">

              {({ geographies }) =>

                geographies.map((geo) => (

                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#0f172a"
                    stroke="#22c55e"
                    strokeWidth={0.5}
                    style={{
                      default: {
                        outline: "none",
                      },

                      hover: {
                        fill: "#22c55e",
                        outline: "none",
                      },

                      pressed: {
                        outline: "none",
                      },
                    }}
                  />

                ))

              }

            </Geographies>

            {/* Markers */}

            {markers.map((marker, index) => (

              <Marker
                key={index}
                coordinates={marker.coordinates}
              >

                <circle
                  r={10}
                  fill="#22c55e"
                  className="animate-pulse"
                />

                <text
                  textAnchor="middle"
                  y={-20}
                  style={{
                    fill: "white",
                    fontSize: "14px",
                  }}
                >

                  {marker.name}

                </text>

              </Marker>

            ))}

          </ComposableMap>

        </div>

      </div>

    </section>
  );
}