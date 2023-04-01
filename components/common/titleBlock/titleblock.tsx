import styles from './titleblock.module.css'
const TitleBlock = (props:any) => {
  return (
    <>
      <div className={styles.sectionHeader}>
        <h2>{props.title}</h2>
        <p>
          {props.description}
        </p>
      </div>
    </>
  );
};

export default TitleBlock;
