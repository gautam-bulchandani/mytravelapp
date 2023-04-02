import Destination from "@/models/destination";
import TitleBlock from "../common/titleBlock/titleblock";
import Attraction from "@/models/attraction";
import Tile from "./tile";
import { useEffect, useState } from "react";
const TileList = (props: any) => {
  
  const [destTitle, setdestTitle] = useState({ title: "", description: "" });
  const [attrTitle, setattrTitle] = useState({ title: "", description: "" });
  const [relattrTitle, setrelattrTitle] = useState({ title: "", description: "" });
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

    const relAttrdata = await fetch("/api/gettitle?id=" + "relatedattr", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    setrelattrTitle(relAttrdata.data);
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
          {props.tilesType === "relattraction" ? (
            <TitleBlock
              title={relattrTitle.title}
              description={relattrTitle.description}
            />
          ) : (
            ""
          )}
          <div className="row gy-4">
            {props.tilesType === "destination"
              ? props.data.map((destination: Destination) => {
                  return (
                    <>
                      <Tile key={destination.name} tileData={destination} tileType="destination" />
                    </>
                  );
                })
              : ""}
              
            {props.tilesType === "attraction" || props.tilesType ==='relattraction'
              ? props.data.map((attractions: Attraction) => {
                  return (
                    <>
                      <Tile key={attractions.name} tileData={attractions} tileType={props.tilesType === "attraction" ? "attraction" : "relattraction"} />{" "}
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
