import PropType from "prop-type";
import "../sassStyles/components/card.scss";

function Card({ ad }) {
  // console.log(`id: ${ad.id}, title: ${ad.title}`);
  return (
    <article className="card">
      <div className="card__overlay"></div>
      <img src={ad.cover} alt="Cover" className="card__cover"/>
      <p className="card__title">{ad.title}</p>
    </article>
  );
}

Card.PropType = {
  ad: PropType.object,
};



export default Card;