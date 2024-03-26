import PropTypes from "prop-types";
import { useState } from "react";
import "../sassStyles/components/collapse.scss";

function Collapse({ title, content }) {
  const [isFolded, setIsFolded] = useState(true);

  return (
    <div className={`collapse ${!isFolded ? "collapse--unfolded" : ""}`}>
      <div className="collapse__title" onClick={() => setIsFolded(!isFolded)}>
        {title} <span className="collapse__arrow"></span>
      </div>
      <div className="collapse__content">{content}</div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapse;
