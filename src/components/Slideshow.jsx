import { useState, useRef } from "react";
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
        <span className="slideshow__arrow-right"
              onClick={slideTheNext}
        ></span>
        <span className="slideshow__counter">
          {index + 1}/{maxLength + 1}
        </span>
      </>
    ) : null;

  function deleteOldImg(position) {
    if (position > 0) {
      const oldImg = imgContainerRef.current.children[0];
      oldImg.remove();
    } else {
      const oldImg = imgContainerRef.current.children[1];
      oldImg.remove();
    }
  }

  function createNewImg(newIndex, position) {
    const image = document.createElement("div");
    image.classList.add("slideshow__image");
    image.style.background = `url(${pictures[newIndex]}) center center / cover`;
    image.style.transform = `translateX(${100 * position}%)`;
    position > 0
      ? imgContainerRef.current.append(image)
      : imgContainerRef.current.prepend(image);
  }

  function slideTheNext() {
    const newIndex = index === maxLength ? 0 : index + 1;
    createNewImg(newIndex, 1);
    requestAnimationFrame(() => {
      imgContainerRef.current.children[0].style.transform = "translateX(-100%)";
      imgContainerRef.current.children[1].style.transform = "translateX(0%)";
    });
    setTimeout(() => {
      deleteOldImg(1);
    }, 400);
    setIndex(newIndex);
  }

  function slideThePrevious() {
    const newIndex = index === 0 ? maxLength : index - 1;
    createNewImg(newIndex, -1);
    requestAnimationFrame(() => {
      imgContainerRef.current.children[0].style.transform = "translateX(0%)";
      imgContainerRef.current.children[1].style.transform = "translateX(100%)";
    });
    setTimeout(() => {
      deleteOldImg(-1);
    }, 400);
    setIndex(newIndex);
  }

  return (
    <div className="slideshow">
      <div className="slideshow__img-container" ref={imgContainerRef}>
        <div
          className="slideshow__image"
          style={{
            background: `url(${pictures[0]}) center center / cover`,
            transform: "translateX(0%)",
          }}
        ></div>
      </div>
      {arrows}
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};

export default Slideshow;
