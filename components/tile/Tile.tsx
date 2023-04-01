import Link from "next/link";

const Tile = (props: any) => {
  
  return (
    <>
      <div className="row gy-4">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="card-item">
            <Link href={props.tileData.name} className="card-link">
              <div className="row">
                <div className="col-xl-5">
                  <div
                    className="card-bg"
                    style={{
                      backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg')`,
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
      </div>
    </>
  );
};

export default Tile;
