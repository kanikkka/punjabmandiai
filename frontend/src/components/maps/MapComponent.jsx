"use client";

import {

  MapContainer,
  TileLayer,
  Marker,
  Popup,

} from "react-leaflet";

export default function MapComponent() {

  const fires = [

    {
      latitude: 31.3260,
      longitude: 75.5762,
      brightness: 340,
    },

    {
      latitude: 30.9000,
      longitude: 75.8573,
      brightness: 370,
    },

  ];

  return (

    <section className="px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">

          <p className="text-orange-400 text-lg">

            Live Satellite Monitoring

          </p>

          <h2
            className="
              text-5xl
              font-black
              mt-4
            "
          >

            NASA Fire Map

          </h2>

        </div>

        <div
          className="
            overflow-hidden
            rounded-[40px]
          "
        >

          <MapContainer
            center={[31.3260, 75.5762]}
            zoom={7}
            style={{
              height: "600px",
              width: "100%",
            }}
          >

            <TileLayer
              attribution="OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {fires.map(
              (
                fire,
                index
              ) => (

                <Marker
                  key={index}
                  position={[
                    fire.latitude,
                    fire.longitude,
                  ]}
                >

                  <Popup>

                    🔥 Fire Detected
                    <br />

                    Brightness:
                    {" "}
                    {fire.brightness}

                  </Popup>

                </Marker>

              )
            )}

          </MapContainer>

        </div>

      </div>

    </section>
  );
}