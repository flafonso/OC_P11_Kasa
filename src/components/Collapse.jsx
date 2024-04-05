import PropTypes from "prop-types";
import { useState } from "react";
import "../sassStyles/components/collapse.scss";

function Collapse({ title, children }) {
  const [isFolded, setIsFolded] = useState(true);

  return (
    <div className={`collapse ${!isFolded ? "collapse--unfolded" : ""}`}>
      <div className="collapse__title">
        {title}{" "}
        <span
          className="collapse__arrow"
          onClick={() => setIsFolded(!isFolded)}
        ></span>
      </div>
      <div className="collapse__content">
        {children}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired
};

export default Collapse;
