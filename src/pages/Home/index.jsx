// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import "../../sassStyles/pages/home.scss";

function Home() {
  const adsData = useLoaderData();

  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" classOption="--home"/>
      <div className="ads">
        { adsData.map((ad) => <Card key={ad.id} ad={ad}/>) }
      </div>
    </div>
  );
}

export default Home;