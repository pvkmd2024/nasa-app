import React from "react";
import "./MarsRover.css";

const SingleMarsPhoto = ({ photo }) => {
  return (
    <div className="mars-photo-card">
      <img src={photo.img_src} alt={`Mars Rover ${photo.rover.name}`} />
      <div className="photo-details">
        <h3>{photo.rover.name}</h3>
        <p>Camera: {photo.camera.full_name}</p>
        <p>Date: {photo.earth_date}</p>
      </div>
    </div>
  );
};

export default SingleMarsPhoto;
