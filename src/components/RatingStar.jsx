import PropTypes from "prop-types";

function RatingStar({ width, height, fill }) {
  return (
    <svg
      className="rating-star"
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 13.7 0.8 C 13.5 0.3 12.9 0 12.4 0 C 11.8 0 11.3 0.3 11 0.8 L 8 7 L 1.3 8 C 0.7 8.1 0.2 8.5 0.1 9.1 C -0.1 9.6 0 10.2 0.4 10.6 L 5.3 15.4 L 4.2 22.2 C 4.1 22.8 4.3 23.4 4.8 23.7 C 5.2 24 5.9 24.1 6.4 23.8 L 12.4 20.6 L 18.4 23.8 C 18.9 24.1 19.5 24.1 20 23.7 C 20.4 23.4 20.7 22.8 20.6 22.2 L 19.4 15.4 L 24.3 10.6 C 24.7 10.2 24.9 9.6 24.7 9.1 C 24.5 8.5 24 8.1 23.5 8 L 16.7 7 L 13.7 0.8 Z"
        fill={fill}
      />
    </svg>
  );
}

RatingStar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

RatingStar.defaultProps = {
  width: 25,
  height: 24,
  fill: "#FF6060",
};

export default RatingStar;
