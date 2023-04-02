import styles from "./hero.module.css";
const Hero = (props: any) => {
  return (
    <>
      <div
        className={styles.breadcrumbs}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${props.data.image})`,
          justifyContent: "center",
        }}
      >
        <div
          className=""
          style={{
            position: "relative",
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
          }}
        >
          <h3 className="white-font">{props.data.title}</h3>
          <p className="white-font">{props.data.description}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
