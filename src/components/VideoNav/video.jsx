import styles from "./style.module.scss";

export default async function VideosNav({videos}) {

 
  return (
    <div className={styles.wrapper}>
      
  { videos.map((item, index) => (
     <div key={index}>
      <video className={styles.figure} src={item.src} width="320" height="240" controls preload="none">
      <source className={styles.figure} src={item.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
   </div>
  ))}
  </div>)
}
