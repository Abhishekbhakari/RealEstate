import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
        Welcome to Runwal Forest Tower
      </h1>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify">
        Experience living in a resort-like atmosphere only at Narang Privado,
        in Thane. This residential project offers Vastu-compliant 2, 3 & 4 BHK
        residences - attached with expansive balconies & large windows for cross
        ventilation. These homes are designed for a lavish lifestyle, with cozy
        master bedrooms, designer kitchens, and imported marble floors. 32+
        amenities such as a clubhouse, swimming pool, pet park, a rock climbing
        wall, and a sports arena afford a luxury lifestyle. The inclusion of a
        serene forest walk, jacuzzi, tea pavilion, & more revives your daily
        lifestyle.
      </p>

      {!showMore && (
        <button
          className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}

      {showMore && (
        <div>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify mt-4">
            Experience living in a resort-like atmosphere only at Narang
            Privado, in Thane. This residential project offers Vastu-compliant
            2, 3 & 4 BHK residences - attached with expansive balconies & large
            windows for cross ventilation. These homes are designed for a lavish
            lifestyle, with cozy master bedrooms, designer kitchens, and
            imported marble floors. 32+ amenities such as a clubhouse, swimming
            pool, pet park, a rock climbing wall, and a sports arena afford a
            luxury lifestyle. The inclusion of a serene forest walk, jacuzzi,
            tea pavilion, & more revives your daily lifestyle.
          </p>
          <button
            className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
            onClick={handleShowMore}
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default About;
