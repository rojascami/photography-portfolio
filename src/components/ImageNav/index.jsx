import styles from "./style.module.scss";
import  Scroller  from  'react-horizontal-auto-scroll';


export default function ImageNav({images}) {
  
  return (
    <ul className={styles.wrapper} >
      {images.map((item) => (
        
        <il className={styles.li} >
          <p className={styles.p}> { item.description} </p> 
          <img src={item.img} alt="" className={styles.img}></img>
        </il>
      ))}
    </ul>
  );
}
