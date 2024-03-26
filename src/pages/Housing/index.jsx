import { useLocation } from "react-router-dom";

function Housing() {
  const location = useLocation();
  const ad = location.state;
  console.log(ad);

  return (
    <div>
      <h1>Fiche du logement: {ad.title}</h1>
    </div>
  );
}

export default Housing;