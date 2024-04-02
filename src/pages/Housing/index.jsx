import { useLocation } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Slideshow from "../../components/Slideshow";
import RatingStar from "../../components/RatingStar";
import "./housing.scss";

function Housing() {
  const location = useLocation();
  const ad = location.state;
  console.log(ad);

  let ratingStars = [];
  for (let i = 0; i < 5; i++) {
    ratingStars.push(<RatingStar key={`star-${i}`} fill={i < ad.rating ? "#FF6060" : "#E3E3E3"}/>);
  }

  let equipmentsTxt = "";
  ad.equipments.map((equipement) => equipmentsTxt+= `${equipement}\n`);
  console.log(`equipmentsTxt = ${equipmentsTxt}`);

  return (
    <div className="housing">
      <Slideshow pictures={ad.pictures} />
      <div className="housing__header">
        <div className="housing__informations">
          <h1 className="housing__title">{ad.title}</h1>
          <p className="housing__location">{ad.location}</p>
          <div className="housing__tags">
            {ad.tags.map((tag, i) => (
              <div key={`${tag}-${i}`} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="housing__host">
          <div className="host">
            <p className="host__name">{ad.host.name}</p>
            <div
              className="host__picture"
              style={{
                background: `url(${ad.host.picture}) center center / cover`,
              }}
            ></div>
          </div>
          <div className="host__rating">
            {ratingStars}
          </div>
        </div>
      </div>
      <div className="housing__details">
        <Collapse title="Descrition" content={ad.description} />
        <Collapse title="Équipement" content={equipmentsTxt} />
      </div>
    </div>
  );
}

export default Housing;
