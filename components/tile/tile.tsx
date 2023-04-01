import Link from "next/link";
import { useEffect } from "react";

const Tile = (props: any) => {
  return (
    <>
      
        <div className="col-lg-6">
          <div className="card-item">
            <Link href={props.tileData.name} className="card-link">
              <div className="row">
                <div className="col-xl-5">
                  <div
                    className="card-bg"
                    style={{
                      backgroundImage: `url('${props.tileType === "attraction"
                      ? "/img/Attractions/"+props.tileData.image
                      : "/img/destinations/"+props.tileData.image}')`,
                    }}
                  ></div>
                </div>
                <div className="col-xl-7 d-flex align-items-center">
                  <div className="card-body">
                    <h4 className="card-title">
                      {props.tileData.title}{" "}
                      {props.tileType === "attraction"
                        ? " - " + props.tileData.shortdescription
                        : ""}
                    </h4>
                    {props.tileType === "destination" ? (
                      <p>
                        Paro is an ideal destination for heritage buffs. You
                        will love the festivals and lush valley views. You will
                        also enjoy exploring the mountains at Paro.
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
    
    </>
  );
};

export default Tile;
