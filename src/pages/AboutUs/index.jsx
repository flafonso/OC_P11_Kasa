import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";

function AboutUs() {
  return (
    <div className="about-us">
      <Banner title="" classOption="--about-us" />
      <Collapse
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
    </div>
  );
}

export default AboutUs;
