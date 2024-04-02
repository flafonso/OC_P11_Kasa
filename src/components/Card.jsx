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
  ad: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
    pictures: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    host: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
    rating: PropTypes.string,
    location: PropTypes.string,
    equipments: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
  })
};



export default Card;