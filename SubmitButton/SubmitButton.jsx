//components
import ImageElement from "../ImageElement/ImageElement";

//styles
import styles from "./SubmitButton.module.css";

export default function SubmitButton({
  buttonText = "",
  type = undefined,
  onClick = null,
  disabledStatus = false,
  extraClass = [],
  iconImageSource = undefined,
}) {
  return (
    <div
      className={`${styles["submit-button"]} ${
        extraClass.length > 0 ? extraClass.join(" ") : ""
      }`}
    >
      {type !== undefined && (
        <button
          onClick={onClick}
          className={styles["submit-button__button"]}
          type={type}
        >
          {buttonText}
          {iconImageSource && <ImageElement imageSource={iconImageSource} />}
        </button>
      )}

      {type === undefined && (
        <button
          disabled={disabledStatus ? true : false}
          onClick={onClick}
          className={styles["submit-button__button"]}
        >
          {buttonText}
          {iconImageSource && <ImageElement imageSource={iconImageSource} />}
        </button>
      )}
    </div>
  );
}
