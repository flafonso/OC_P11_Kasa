import { useLocation } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Slideshow from "../../components/Slideshow";

function Housing() {
  const location = useLocation();
  const ad = location.state;
  console.log(ad);

  return (
    <div className="housing">
      <Slideshow pictures={ad.pictures} />
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
        <Collapse title="Descrition" content={ad.description} />
        <Collapse title="Équipement" content="" />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Housing;
