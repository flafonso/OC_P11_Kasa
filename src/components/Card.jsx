import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../sassStyles/components/card.scss";

function Card({ ad }) {
  return (
    <Link to={`/housing-sheet/${ad.id}`} className="card">
      <div className="card__overlay"></div>
      <img src={ad.cover} alt="Cover" className="card__cover"/>
      <p className="card__title">{ad.title}</p>
    </Link>
  );
}

Card.propTypes = {
  ad: PropTypes.object.isRequired
};



export default Card;