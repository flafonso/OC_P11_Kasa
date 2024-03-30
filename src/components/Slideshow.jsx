import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "../sassStyles/components/slideshow.scss";

function Slideshow({ pictures }) {
  const imgContainerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const maxLength = pictures.length - 1;
  const arrows =
    maxLength + 1 !== 1 ? (
      <>
        <span
          className="slideshow__arrow-left"
          onClick={slideThePrevious}
        ></span>
        <span className="slideshow__arrow-right" onClick={slideTheNext}></span>
      </>
    ) : null;

  useEffect(() => {
    console.log(imgContainerRef.current.offsetWidth);
    console.log(imgContainerRef.current.offsetHeight);
  }, []);

  // function slideTo(newIndex) {
  //   if (!imgContainerRef.current) {
  //     console.log("Error: imgContainerRef is null");
  //     return;
  //   }
  //   imgContainerRef.current.animate(
  //     [
  //       {
  //         transform: `translateX(${-100 * newIndex}%)`,
  //       },
  //     ],
  //     {
  //       duration: 400,
  //       easing: "ease-in-out",
  //       fill: "forwards",
  //     }
  //   );
  // }

  function slideTheNext() {
    const newIndex = index === maxLength ? 0 : index + 1;
    // slideTo(newIndex);
    setIndex(newIndex);
  }

  function slideThePrevious() {
    const newIndex = index === 0 ? maxLength : index - 1;
    // slideTo(newIndex);
    setIndex(newIndex);
  }

  const getImageStyle = (picture, i) => ({
    background: `url(${picture}) center center / cover`,
    transform: `translateX(${100 * (i - index)}%)`,
  });

  return (
    <div className="slideshow">
      <div className="slideshow__img-container" ref={imgContainerRef}>
        {pictures.map((picture, i) => (
          <div
            className="slideshow__image"
            key={i}
            style={getImageStyle(picture, i)}
          ></div>
        ))}
      </div>
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
