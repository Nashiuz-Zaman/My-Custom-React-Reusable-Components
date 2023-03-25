//components
import ImageWithTitle from "../ImageWithTitle/ImageWithTitle";

//styles
import styles from "./ImageGallery.module.css";

export default function ImageGallery({
  imageDataArray = "no image data provided",
  extraClass = undefined,
}) {
  return (
    <div
      className={`${styles["image-gallery-main"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      {imageDataArray.map((single) => {
        return (
          <ImageWithTitle
            key={single.id}
            imageSource={single.imageSource}
            alt={single.title}
            title={single.title}
          />
        );
      })}
    </div>
  );
}
