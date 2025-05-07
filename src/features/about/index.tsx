import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
//@ts-ignore
import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export const About = () => {
  return (
    <section className="bg-[#f7fafd] py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">О проекте</h2>
          <p className="text-lg mb-10">
            Жилой Комплекс расположен в новом, стремительно развивающемся 38
            микрорайоне
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div className="border-r pr-4">
              <p className="text-2xl font-semibold text-lime-600">4</p>
              <p className="text-sm mt-2">
                Пятиэтажные кирпичные дома с цокольными этажами под коммерческое
                использование
              </p>
            </div>
            <div className="border-r pr-4">
              <p className="text-2xl font-semibold text-lime-600">2</p>
              <p className="text-sm mt-2">
                Восьмиэтажные дома с первым этажом под коммерческое
                использование
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-lime-600">300+</p>
              <p className="text-sm mt-2">Парковочные места</p>
            </div>
          </div>
        </div>

        {/* Карта вместо изображения */}
        <div className="rounded-xl overflow-hidden shadow-md h-80">
          <MapContainer
            center={[51.1325, 71.4036]} // Заменить на свои координаты
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[51.1325, 71.4036]}>
              <Popup>ЖК в 38 микрорайоне</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};
