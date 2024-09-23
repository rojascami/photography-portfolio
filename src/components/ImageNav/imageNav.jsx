import styles from "./style.module.scss";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";


export default function ImageNav({ images, title }) {
  const options = {
    arrowPrev: false,
    arrowNext: false,
    zoom: true,
    close: false,
    counter: false,
    // bgOpacity: 0.2,
    // padding: { top: 50, bottom: 40, left: 300, right: 100 },
  };


  return (
    <>
     <h2 className={`${styles.titleGallery}`}>{title}</h2>
      <Gallery options={options} >
        <div className={styles.containerGallery}>
          {images.map((item, index) => (
            <Item
              key={index}
            original={item.src}
            // thumbnail={item.src}
            width="1024"
            height="800"
          >
              {({ ref, open }) => (
                <img
                  key={item.index}
                  ref={ref}
                  onClick={open}
                  src={item.src}
                  height={item.height}
                  className={styles.imageGallery}
                />
              )}
            </Item>
          ))}
        </div>
      </Gallery>
    
    </>
  );
}
