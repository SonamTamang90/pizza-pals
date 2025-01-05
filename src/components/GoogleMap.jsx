import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ locations }) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.7128, // Replace with your default center coordinates
    lng: -74.006,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{
              lat: location.lat,
              lng: location.lng,
            }}
            title={location.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
