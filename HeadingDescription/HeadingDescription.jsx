//styles
import styles from "./HeadingDescription.module.css";

//component starts here
export default function HeadingDescription({
  heading = "",
  extraClass = undefined,
  description = "",
}) {
  // jsx template
  return (
    <div
      className={`${styles["heading-description-main"]} ${
        extraClass ? extraClass.join(" ") : "no-extra-class"
      }`}
    >
      <h3 className={styles["heading-description-main__heading"]}>{heading}</h3>
      <p className={styles["heading-description-main__description"]}>
        {description}
      </p>
    </div>
  );
}
