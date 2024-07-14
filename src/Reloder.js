import { React, useState, useEffect } from "react";
import Preloader from "./video/pre-loader.gif";
const Reloder = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timeinterval = setInterval(() => setLoading(false), 4000);
    return () => clearInterval(timeinterval);
  }, []);
  return (
    Loading && (
      <div className="Reloader">
        <img src={Preloader} alt="" />
      </div>
    )
  );
};

export default Reloder;
