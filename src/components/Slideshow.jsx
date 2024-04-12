import { useState, useRef } from "react";
import PropTypes from "prop-types";
import "../sassStyles/components/slideshow.scss";

function Slideshow({ pictures }) {
  const [canSlide, setCanSlide] = useState(true);
  const [index, setIndex] = useState(0);
  const imgContainerRef = useRef(null);
  const maxLength = pictures.length - 1;
  const arrows =
    maxLength + 1 !== 1 ? (
      <>
        <span
          className="slideshow__arrow-left"
          onClick={() => slideTo(-1)}
        ></span>
        <span
          className="slideshow__arrow-right"
          onClick={() => slideTo(1)}
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
    if (imgContainerRef.current) {
      position > 0
      ? imgContainerRef.current.append(image)
      : imgContainerRef.current.prepend(image);
    }
  }

  function slideTo(position) {
    if (!canSlide) {
      return ;
    }
    setCanSlide(false);
    const newIndex =
      position === 1
        ? index === maxLength
          ? 0
          : index + 1
        : index === 0
        ? maxLength
        : index - 1;
    createNewImg(newIndex, position);
    requestAnimationFrame(() => {
      imgContainerRef.current.children[0].style.transform = `translateX(${
        position === 1 ? "-100%" : "0%"
      })`;
      imgContainerRef.current.children[1].style.transform = `translateX(${
        position === 1 ? "0%" : "100%"
      })`;
    });
    setTimeout(() => {
      deleteOldImg(position);
      setCanSlide(true);
    }, 400);
    setIndex(newIndex);
    console.log("slideTo call");
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
