import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onChange(selectedRating);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          onClick={() => handleStarClick(star)}
          color={star <= rating ? "#ffc107" : "#e4e5e9"}
          size={30}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default StarRating;
