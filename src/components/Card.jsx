import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../sassStyles/components/card.scss";

function Card({ ad }) {
  // console.log(`id: ${ad.id}, title: ${ad.title}`);
  return (
    <Link to="/housing-sheet" state={ad} className="card">
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