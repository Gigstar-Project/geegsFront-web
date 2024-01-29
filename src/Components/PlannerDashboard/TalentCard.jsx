import React from "react";

const TalentCard = ({ talent }) => {
  return (
    <div className="talent-card">
        <div className="move-talent-card">
      <img src={talent.imageSrc} alt={talent.name} />
      <h3>{talent.name}</h3>
      {/* Add other relevant details */}
      <button>Book Now</button>
      </div>
    </div>
  );
};

export default TalentCard;
