import { useState } from "react";
import PropTypes from "prop-types";
import "../sassStyles/components/slideshow.scss";

function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0);
  const maxLength = pictures.length - 1;
  console.log(pictures[0]);
  console.log(maxLength);

  const arrows =
  maxLength + 1 !== 1 ? (
    <>
      <span  className="slideshow__arrow-left" onClick={decrementIndex}></span>
      <span className="slideshow__arrow-right" onClick={incrementIndex}></span>
    </>
  ) : null;

  function incrementIndex() {
    setIndex(index === maxLength ? 0 : index + 1);
    console.log(index);
  }

  function decrementIndex() {
    setIndex(index === 0 ? maxLength : index - 1);
    console.log(index);
  }

  return (
    <div
      className="slideshow"
      style={{ background: `url(${pictures[index]}) center center / cover` }}
    >
      {arrows}
      <span className="slideshow__counter">
        {index + 1}/{maxLength + 1}
      </span>
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.array,
};

export default Slideshow;
