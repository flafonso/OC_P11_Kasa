import PropTypes from "prop-types";
import "../sassStyles/components/banner.scss";

function Banner({ title, classOption}) {
  // const root = document.documentElement;
  // console.log(root);
  // root?.style.setProperty("--banner-background", "../../assets/images/landscape-1.jpg");
  const bannerClass = `banner banner${classOption}`;

  return (
    <div className={bannerClass}>
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  classOption: PropTypes.string
};

export default Banner;