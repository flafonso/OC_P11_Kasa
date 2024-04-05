import PropTypes from "prop-types";
import "../sassStyles/components/banner.scss";

function Banner({ title, backgroundImg}) {
  const backgroundStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${backgroundImg}) center center / cover no-repeat`
  };

  return (
    <div className="banner" style={backgroundStyle}>
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  backgroundImg: PropTypes.string.isRequired
};

export default Banner;