import styles from "./hero.module.css";
const Hero = (props:any) => {
  console.log(props.data)
  return (
    <>
      <div
        className={styles.breadcrumbs}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${props.data.image})`,
          justifyContent:"center"
        }}
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div
          className=""
          style={{
            position: "relative",
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
          }}
          data-aos="fade"
        >
          <h3 className="whiteFont">{props.data.title}</h3>
          <p className="whiteFont">
            {props.data.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
