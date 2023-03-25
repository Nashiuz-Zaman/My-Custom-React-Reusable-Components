//components
import ImageButton from "../ImageButton/ImageButton";

//styles
import styles from "./SocialMediaLinks.module.css";

export default function SocialMediaLinks({
  extraClass = undefined,
  heading = "no heading provided",
  logoButtonsArray = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles["social-media-links-main"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      {logoButtonsArray === undefined ? (
        <p>No button information provided</p>
      ) : (
        <div className={styles["social-media-links-main__image-buttons"]}>
          <h3
            className={
              styles["social-media-links-main__image-buttons__heading"]
            }
          >
            {heading}
          </h3>
          <div
            className={
              styles["social-media-links-main__image-buttons__buttons"]
            }
          >
            {logoButtonsArray.map((single) => {
              return <ImageButton key={single.id} imageSource={single} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
