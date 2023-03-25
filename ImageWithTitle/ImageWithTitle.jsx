//coomponents
import ImageElement from "../ImageElement/ImageElement";

//styles
import styles from "./ImageWithTitle.module.css";

export default function ImageWithTitle({
  imageSource = "",
  alt = "",
  cover = false,
  extraClass = undefined,
  title = "no title provided",
}) {
  return (
    <figure
      className={`${styles["image-with-title-main"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      <ImageElement imageSource={imageSource} alt={alt} cover={cover} />

      <div className={styles["image-with-title-main__title-container"]}>
        <p className={styles["image-with-title-main__title-container__title"]}>
          {title}
        </p>
      </div>
    </figure>
  );
}
