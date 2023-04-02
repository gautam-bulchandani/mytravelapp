import Destination from "@/models/destination";
import TitleBlock from "../common/titleBlock/titleblock";
import Attraction from "@/models/attraction";
import Tile from "./tile";
import { useEffect, useState } from "react";
const TileList = (props: any) => {
  if(props.tilesType==='attraction'){
    console.log('attractions');
    console.log(props.data);
  }
  const [destTitle, setdestTitle] = useState({ title: "", description: "" });
  const [attrTitle, setattrTitle] = useState({ title: "", description: "" });
  const getTitle = async () => {
    const destdata = await fetch("/api/gettitle?id=" + "destination", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    setdestTitle(destdata.data);

    const attrdata = await fetch("/api/gettitle?id=" + "attraction", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    setattrTitle(attrdata.data);
  };
  useEffect(() => {
    getTitle();
  }, []);
  return (
    <>
      <section id="constructions" className="constructions top-section">
        <div className="container">
          {props.tilesType === "destination" ? (
            <TitleBlock
              title={destTitle.title}
              description={destTitle.description}
            />
          ) : (
            ""
          )}
          {props.tilesType === "attraction" ? (
            <TitleBlock
              title={attrTitle.title}
              description={attrTitle.description}
            />
          ) : (
            ""
          )}
          <div className="row gy-4">
            {props.tilesType === "destination"
              ? props.data.map((destination: Destination) => {
                  return (
                    <>
                      <Tile tileData={destination} tileType="destination" />
                    </>
                  );
                })
              : ""}
            {props.tilesType === "attraction"
              ? props.data.map((attractions: Attraction) => {
                  return (
                    <>
                      <Tile tileData={attractions} tileType="attraction" />{" "}
                      <br />
                    </>
                  );
                })
              : ""}
          </div>
        </div>
      </section>
    </>
  );
};
export default TileList;
