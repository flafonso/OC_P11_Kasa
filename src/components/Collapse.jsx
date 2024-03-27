import PropTypes from "prop-types";
import { useState } from "react";
import "../sassStyles/components/collapse.scss";

function Collapse({ title, content }) {
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
        <p>{content}</p>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapse;
