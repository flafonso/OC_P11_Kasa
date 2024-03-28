import { useLocation } from "react-router-dom";
import Slideshow from "../../components/Slideshow";

function Housing() {
  const location = useLocation();
  const ad = location.state;
  console.log(ad);

  return (
    <div>
      <Slideshow pictures={ad.pictures} />
    </div>
  );
}

export default Housing;