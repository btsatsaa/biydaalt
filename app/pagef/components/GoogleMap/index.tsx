// "use client";
// import React from "react";
// import { useEffect } from "react";
// import { Loader } from "@googlemaps/js-api-loader";
// export function Map() {
//   // const mapRef = React.useRef(null);
//   const mapRef = React.useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const initMap = async () => {
//       // console.log("initmap");
//       const loader = new Loader({
//         // apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
//         // apiKey: "AIzaSyDEWd2Ms7g24w4n47TSIclfY8e26LNlDzk",
//         apiKey: "AIzaSyDfUWU8RGrqU5iFnutK57iExM9014mIgCY",
//         // version: "weekly",
//       });
//       const { Map } = await loader.importLibrary("maps");
//       const position = {
//         lat: 47.915928247436646,
//         long: 106.89293380284563,
//       };
//       // map option
//       const mapOptions: google.maps.MapOptions = {
//         center: position,
//         zoom: 17,
//         mapId: "bydaalttosol",
//       };
//       //setup
//       const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
//     };
//     initMap();
//   }, []);

//   return <div style={{ height: "60%" }} ref={mapRef}></div>;
// }
// export default Map;
// "use client";
// import React, { useEffect, useRef } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// export function Map() {
//   const mapRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const initMap = async () => {
//       const loader = new Loader({
//         apiKey:
//           process.env.NEXT_PUBLIC_MAPS_API_KEY ||
//           "AIzaSyDfUWU8RGrqU5iFnutK57iExM9014mIgCY",

//         version: "weekly",
//       });

//       try {
//         await loader.load();
//         const { google } = loader;

//         const position = {
//           lat: 47.915928247436646,
//           lng: 106.89293380284563,
//         };

//         // map option
//         const mapOptions: google.maps.MapOptions = {
//           center: position,
//           zoom: 17,
//           mapId: "bydaalttosol",
//         };

//         // setup
//         const googleMap = new google.maps.Map(
//           mapRef.current as HTMLDivElement,
//           mapOptions
//         );
//       } catch (error) {
//         console.error("Error loading Google Maps:", error);
//       }
//     };

//     initMap();
//   }, []);

//   return <div style={{ height: "60%" }} ref={mapRef}></div>;
// }

// export default Map;
// components/GoogleMap.js
"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 46.8625, // Replace with your desired latitude (e.g., a location in Mongolia)
  lng: 103.8467, // Replace with your desired longitude
};

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDEWd2Ms7g24w4n47TSIclfY8e26LNlDzk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
