// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import "./home.scss";

function Home() {
  // const [adsData, setAdsData] = useState([]);
  // const [isDataLoading, setDataLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchAdsData() {
  //     setDataLoading(true);
  //     try {
  //       const response = await fetch("http://localhost:3000/logements.json");
  //       const data = await response.json();
  //       setAdsData(data);
  //     } catch(error) {
  //       console.log("Data recovery error", error);
  //     } finally {
  //       setDataLoading(false);
  //     }
  //   }

  //   fetchAdsData();
  // }, []);

  const adsData = useLoaderData();
  console.log(adsData);
  // adsData.map((ad) => console.log(ad));

  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" classOption="--home"/>
      <div className="ads">
        { adsData.map((ad) => <Card key={ad.id} ad={ad}/>) }
        {/* {isDataLoading ? (<div>Loading...</div>) : (adsData.map((ad) => <Card ad={ad}/>) )} */}
      </div>
    </div>
  );
}

export default Home;